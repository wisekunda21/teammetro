/* ------------------------------------------------------------------
   QUIZ RESULTS: add this to your EXISTING Google Apps Script project
   (the same one that has READ_KEY and the sign-in log).
   Do NOT create a new script: the register page uses one web app address.

   1) Paste the three functions below anywhere in the project.
   2) In your existing doPost(e), right after you parse the request body
      into a variable (called "d" here), add:
          if (d && d.type === 'quiz') return quizSave_(d);
   3) In your existing doGet(e), at the very top, add:
          if (e && e.parameter && e.parameter.action === 'quiz') return quizRows_(e);
   4) Deploy > Manage deployments > edit > New version > Deploy.
      (The web app address stays the same.)
------------------------------------------------------------------- */

function quizSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('Quiz');
  if (!sh) {
    sh = ss.insertSheet('Quiz');
    sh.appendRow(['Time', 'User ID', 'Name', 'Score', 'Correct', 'Questions']);
  }
  return sh;
}

function quizSave_(d) {
  var t = Utilities.formatDate(new Date(), 'Africa/Lusaka', 'yyyy-MM-dd HH:mm:ss');
  quizSheet_().appendRow([t, String(d.id || ''), String(d.name || ''),
    Number(d.score) || 0, Number(d.ok) || 0, Number(d.n) || 0]);
  return ContentService.createTextOutput('ok');
}

function quizRows_(e) {
  var out = (e.parameter.key === READ_KEY)
    ? { rows: quizSheet_().getDataRange().getValues().slice(1) }
    : { error: 'denied' };
  return ContentService.createTextOutput(JSON.stringify(out))
    .setMimeType(ContentService.MimeType.JSON);
}
