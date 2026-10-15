/* Metro Team: sign-in log for Google Sheets.
   1. Change READ_KEY below to a secret word only you know.
   2. Deploy > New deployment > Web app > Execute as: Me, Who has access: Anyone.
   3. Copy the web app URL into LOGURL in index.html. */
const READ_KEY = 'CHANGE_THIS_SECRET';
const TZ = 'Africa/Lusaka';

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

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents), now = new Date();
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
  const out = o => ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
  if (!e.parameter || e.parameter.key !== READ_KEY) return out({ error: 'denied' });
  const v = sheet_().getDataRange().getDisplayValues().slice(1).slice(-4000);
  return out({ rows: v });
}
