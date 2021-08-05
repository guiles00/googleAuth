const { google } = require('googleapis');

function listMajors(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId:"1_Chj7uzzDZfepn-6ZCLoXZO9CBZB4MLAaxPGFQUpM_8",
    range: 'Julio 2021!A1:A20',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('Name, Major:');
      // Print columns A and E, which correspond to indices 0 and 4.
      rows.map((row) => {
        console.log(`${row[0]}, ${row[4]}`);
      });
    } else {
      console.log('No data found.');
    }
  });
}

module.exports = listMajors;