const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\jasim\\.gemini\\antigravity-ide\\brain\\b5db7ca4-fa65-4d9c-b15b-53ec1121757f\\.user_uploaded';
const destDir = path.join(__dirname, '..', 'assets', 'projects');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = {
  'media_1792042324922.jpg': 'dentocare_mobile.jpg',
  'media_1792042359623.png': 'dentocare_desktop.png',
  'media_1792042370230.jpg': 'smiledentos_mobile.jpg',
  'media_1792042394145.png': 'smiledentos_desktop.png',
  'media_1792042475728.jpg': 'alshahama_mobile.jpg',
  'media_1792042529099.jpg': 'alshahama_desktop.jpg',
  'media_1792042537962.jpg': 'naturals_mobile.jpg',
  'media_1792042551703.png': 'naturals_desktop.png'
};

for (const [srcFile, destFile] of Object.entries(mapping)) {
  const from = path.join(srcDir, srcFile);
  const to = path.join(destDir, destFile);
  if (fs.existsSync(from)) {
    fs.copyFileSync(from, to);
    console.log(`Copied ${srcFile} -> ${destFile} (${fs.statSync(to).size} bytes)`);
  } else {
    console.error(`Source not found: ${from}`);
  }
}
