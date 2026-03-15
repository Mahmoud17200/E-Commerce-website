import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// عشان نجيب __dirname في ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectDir = path.join(__dirname, 'src'); // ممكن تضيف public بعد كده

function checkFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      checkFiles(fullPath);
    } else if (stat.isFile()) {
      const content = fs.readFileSync(fullPath, 'utf-8');

      // البحث عن مسارات فيها spaces أو % أو رموز مش ASCII
      const regex = /(\/?[^\s]*[\s%][^\s]*)/g;
      const matches = content.match(regex);

      if (matches) {
        console.log(`⚠️ Found suspicious path in: ${fullPath}`);
        matches.forEach(m => console.log(`   -> ${m}`));
      }
    }
  });
}

checkFiles(projectDir);
