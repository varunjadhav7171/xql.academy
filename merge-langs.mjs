import fs from 'fs';

const missing = JSON.parse(fs.readFileSync('./missing-langs.json', 'utf8'));
const existing = fs.readFileSync('./app/locales/cardsDictionary.ts', 'utf8');

// Remove trailing }; from the file and append missing lang blocks
let base = existing.trimEnd();
// Remove last "};" 
base = base.slice(0, base.lastIndexOf('};'));

const langs = Object.keys(missing);
let additions = '';
for (const lang of langs) {
  const d = missing[lang];
  const kidsStr = d.kids.map(k => `    { title: ${JSON.stringify(k.title)}, desc: ${JSON.stringify(k.desc)} }`).join(',\n');
  const studStr = d.students.map(s => `    { title: ${JSON.stringify(s.title)}, desc: ${JSON.stringify(s.desc)}, badge: ${JSON.stringify(s.badge)} }`).join(',\n');
  const examStr = d.exams.map(e => `    { title: ${JSON.stringify(e.title)}, desc: ${JSON.stringify(e.desc)}, tag: ${JSON.stringify(e.tag)} }`).join(',\n');
  
  // Replace existing empty entry for this lang
  const emptyPattern = new RegExp(`  ${lang}: \\{ kids: \\[\\], students: \\[\\], exams: \\[\\] \\},?\\n`,'g');
  // Also replace placeholder ". " entries
  base = base.replace(emptyPattern, '');

  additions += `  ${lang}: {\n    kids: [\n${kidsStr}\n    ],\n    students: [\n${studStr}\n    ],\n    exams: [\n${examStr}\n    ]\n  },\n`;
}

// Remove it placeholder as well
base = base.replace(/  it: \{[\s\S]*?\},\n  pt/m, '  pt');

const final = base + additions + '};\n';
fs.writeFileSync('./app/locales/cardsDictionary.ts', final);
console.log('Merged successfully!');
