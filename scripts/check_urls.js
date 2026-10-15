const https = require('https');

function check(url) {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      console.log(`Redirect ${url} -> ${res.headers.location}`);
      check(res.headers.location);
    } else {
      console.log(`FINAL URL: ${url}`);
      console.log(`Status: ${res.statusCode}`);
      console.log(`x-frame-options: ${res.headers['x-frame-options']}`);
      console.log(`CSP: ${res.headers['content-security-policy']}`);
      console.log('===');
    }
    res.resume();
  }).on('error', err => {
    console.log(`Error ${url}: ${err.message}`);
  });
}

check('https://www.dentocareofficial.com');
