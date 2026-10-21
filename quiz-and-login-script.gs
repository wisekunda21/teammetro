const READ_KEY = 'tobwa26';
const TZ = 'Africa/Lusaka';
const DEFPW = 'm45';
const DATA_URL = 'https://raw.githubusercontent.com/wisekunda21/teammetro/main/data.json';

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName('Logins');
  if (!s) {
    s = ss.insertSheet('Logins');
    s.getRange('A:D').setNumberFormat('@');
    s.appendRow(['Time', 'Date', 'ID', 'Name']);
  }
  return s;
}

function pwSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName('Passwords');
  if (!s) {
    s = ss.insertSheet('Passwords');
    s.getRange('A:C').setNumberFormat('@');
    s.appendRow(['ID', 'Hash', 'Time']);
  }
  return s;
}

function overrides_() {
  const v = pwSheet_().getDataRange().getDisplayValues().slice(1), o = {};
  v.forEach(r => { o[r[0]] = { hash: r[1], ts: Number(r[2]) }; });
  return o;
}

function sha_(t) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, t, Utilities.Charset.UTF_8)
    .map(b => ('0' + (b & 255).toString(16)).slice(-2)).join('');
}

// An agent changes their own password. The current password must be right.
function doPw_(d) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const id = String(parseInt(d.id)), nh = String(d.hash || ''), oh = String(d.old || '');
    if (!/^[0-9a-f]{64}$/.test(nh) || !/^[0-9a-f]{64}$/.test(oh)) return { error: 'bad' };
    const res = UrlFetchApp.fetch(DATA_URL + '?t=' + Date.now(), { muteHttpExceptions: true });
    if (res.getResponseCode() !== 200) return { error: 'data' };
    const a = (JSON.parse(res.getContentText()).agents || []).find(x => String(x.id) === id);
    if (!a) return { error: 'unknown' };
    const ov = overrides_()[id];
    // an admin reset (a.rs) newer than the agent's own change wins
    const cur = (ov && ov.ts > (a.rs || 0)) ? ov.hash : (a.pw || sha_(a.k + ':' + DEFPW));
    if (oh !== cur) return { error: 'wrong' };
    const ts = Date.now();
    pwSheet_().appendRow([id, nh, String(ts)]);
    return { ok: true, ts: ts };
  } finally {
    lock.releaseLock();
  }
}

function doPost(e) {
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return ContentService.createTextOutput('ok'); }
  if (d && d.type === 'pw') {
    try { return out_(doPw_(d)); } catch (err) { return out_({ error: 'server' }); }
  }
  // quiz scores go to the Quiz sheet, NOT the login log
  if (d && d.type === 'quiz') {
    try { return quizSave_(d); } catch (err) { return ContentService.createTextOutput('ok'); }
  }
  try {
    const now = new Date();
    sheet_().appendRow([
      Utilities.formatDate(now, TZ, 'yyyy-MM-dd HH:mm:ss'),
      Utilities.formatDate(now, TZ, 'yyyy-MM-dd'),
      String(d.id || '').slice(0, 10),
      String(d.name || '').slice(0, 80)
    ]);
  } catch (err) {}
  return ContentService.createTextOutput('ok');
}

function doGet(e) {
  const p = e.parameter || {};
  if (p.action === 'pw') {
    const o = overrides_();
    return out_({ now: Date.now(), rows: Object.keys(o).map(id => ({ id: id, hash: o[id].hash, ts: o[id].ts })) });
  }
  // public leaderboard: names and scores only, no key needed, so agents can see each other
  if (p.action === 'board') return quizBoard_();
  // admin quiz results (same READ_KEY as the login log)
  if (p.action === 'quiz') return quizRows_(e);
  if (p.key !== READ_KEY) return out_({ error: 'denied' });
  const v = sheet_().getDataRange().getDisplayValues().slice(1).slice(-4000);
  return out_({ rows: v });
}

// Run this once from the editor so Google asks you to allow the new permissions.
function authorize() {
  UrlFetchApp.fetch(DATA_URL);
  pwSheet_();
  quizSheet_();
}

function quizSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName('Quiz');
  if (!sh) {
    sh = ss.insertSheet('Quiz');
    sh.getRange('A:A').setNumberFormat('@');
    sh.appendRow(['Time', 'User ID', 'Name', 'Score', 'Correct', 'Questions']);
  }
  return sh;
}

function quizSave_(d) {
  const t = Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm:ss');
  quizSheet_().appendRow([t, String(d.id || '').slice(0, 10), String(d.name || '').slice(0, 80),
    Number(d.score) || 0, Number(d.ok) || 0, Number(d.n) || 0]);
  return ContentService.createTextOutput('ok');
}

function quizRows_(e) {
  const o = (e.parameter.key === READ_KEY)
    ? { rows: quizSheet_().getDataRange().getDisplayValues().slice(1) }
    : { error: 'denied' };
  return out_(o);
}

// One row per agent: best score, number of games, latest game. Highest first.
function quizBoard_() {
  const v = quizSheet_().getDataRange().getDisplayValues().slice(1), m = {};
  v.forEach(r => {
    const id = r[1];
    if (!id) return;
    const s = Number(r[3]) || 0;
    const o = m[id] || (m[id] = { id: id, name: r[2], best: 0, games: 0, last: '', ls: 0, ok: 0, n: 10 });
    o.games++;
    if (s > o.best) o.best = s;
    if (String(r[0]) >= o.last) { o.last = String(r[0]); o.ls = s; o.ok = Number(r[4]) || 0; o.n = Number(r[5]) || 10; o.name = r[2]; }
  });
  const list = Object.keys(m).map(k => m[k]).sort((a, b) => b.best - a.best || a.last.localeCompare(b.last));
  return out_({ board: list });
}
