const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('#E50914') || content.includes('#B3000B') || content.includes('#FFC107')) {
        content = content.replace(/#E50914/g, '#36a9ff'); // Red to Realm Blue
        content = content.replace(/#B3000B/g, '#2196f3'); // Dark Red to Dark Realm Blue
        // Keep yellow (#FFC107) as it's used as an accent in the new design too.
        fs.writeFileSync(fullPath, content);
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
console.log("Replacement complete.");
