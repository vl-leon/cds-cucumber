const https = require('node:https');

function httpsGet(url) {
  return new Promise((resolve, reject) => {

    let req = https.get(url, (res) => {
      let content = "";
      const { statusCode, headers } = res;
      const contentType = headers['content-type'];
      res.on('data', chunk => {
        content += String(chunk);
      })
      res.on('end', () => {
        resolve({statusCode,contentType,content})
      })
    })

    req.on('error', (e) => {
      reject(e);
    });

  })

}

module.exports = httpsGet;
