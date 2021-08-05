const fs = require('fs');
const authorize = require("./lib/authorize");
const listMajors = require("./lib/listMajors");

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = 'token.json';

async function main(){
  
  const credentials = await fs.promises.readFile('credentials.json', 'utf8');
  const oauth = await authorize(JSON.parse(credentials));
  
  const token = await fs.promises.readFile(TOKEN_PATH, 'utf8');
  
  oauth.setCredentials(JSON.parse(token));
  
  //this function proccess the data
  listMajors(oauth);
}

main();