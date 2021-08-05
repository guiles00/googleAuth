const { google } = require('googleapis');

function authorize(credentials){
  const { client_secret, client_id, redirect_uris } = credentials.installed;    
  return new Promise((resolve, reject)=>{
    
    const auth = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  
    resolve(auth);
    
  }) 
}

module.exports = authorize;