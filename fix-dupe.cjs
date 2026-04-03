const fs = require('fs');
let s = fs.readFileSync('./app/locales/cardsDictionary.ts', 'utf8');

// Find and remove the first duplicate 'it' block (the placeholder one with "." values)
// Strategy: find the second occurrence and keep it; remove the first one
const marker = '  it: {';
const first = s.indexOf(marker);
const second = s.indexOf(marker, first + 1);

if (second !== -1) {
  // Remove from first to just before second
  s = s.slice(0, first) + s.slice(second);
  console.log('Removed duplicate it block!');
} else {
  console.log('No duplicate found - already clean!');
}

fs.writeFileSync('./app/locales/cardsDictionary.ts', s);
