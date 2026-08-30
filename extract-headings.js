const fs = require('fs');
const path = require('path');

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, filesList);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      filesList.push(filePath);
    }
  }
  return filesList;
}

const files = getFiles('src');
let output = '';

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  let fileHasMatch = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/<h[1-6]/.test(line)) {
      if (!fileHasMatch) {
        output += `\n--- ${file} ---\n`;
        fileHasMatch = true;
      }
      output += `${i + 1}: ${line.trim()}\n`;
    }
  }
}

fs.writeFileSync('headings.txt', output);
console.log('Done!');
