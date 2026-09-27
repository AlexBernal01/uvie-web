const fs = require('fs');
const pdfBuffer = fs.readFileSync('./public/UVIE.pdf');
const base64String = pdfBuffer.toString('base64');
fs.writeFileSync(
  './src/data/uvie-base64.js',
  `export const UVIE_BASE64 = '${base64String}';`
);
console.log('Base64 generado. Longitud:', base64String.length, 'caracteres');