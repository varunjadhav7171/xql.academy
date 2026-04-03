import fs from 'fs';
import { translate } from '@vitalets/google-translate-api';

const baseKids = [
  { title: "ABC & Words", desc: "Learn alphabets, phonics and basic vocabulary" },
  { title: "Numbers & Math", desc: "Count, add and subtract with fun visual games" },
  { title: "World Around Us", desc: "Animals, nature, planets and amazing science facts" },
  { title: "Art & Creativity", desc: "Colors, shapes, drawing and creative expression" },
  { title: "Story Time", desc: "Interactive stories that build reading and imagination" },
  { title: "Speak & Learn", desc: "Pronounce words and build confidence speaking" },
  { title: "Puzzles & Logic", desc: "Brain teasers that sharpen thinking and problem solving" },
  { title: "Rhymes & Songs", desc: "Learn through music, rhythm and memory songs" }
];

const baseStudents = [
  { title: "Mathematics", desc: "Algebra, geometry, trigonometry and calculus", badge: "Class 6-12" },
  { title: "Science", desc: "Physics, chemistry and biology made visual", badge: "Class 6-12" },
  { title: "English", desc: "Grammar, comprehension, writing and literature", badge: "Class 1-12" },
  { title: "Social Studies", desc: "History, geography, civics and economics", badge: "Class 6-10" },
  { title: "Computer Sci.", desc: "Programming basics, MS Office and digital skills", badge: "Class 6-12" },
  { title: "Lab Practicals", desc: "Virtual experiments with step-by-step guidance", badge: "Class 9-12" },
  { title: "Essay Writing", desc: "Structure, vocabulary and writing skills for exams", badge: "Class 8-12" },
  { title: "Languages", desc: "Hindi, Sanskrit, French and regional languages", badge: "Class 1-12" }
];

const baseExams = [
  { title: "UPSC / IAS", desc: "Prelims, Mains and Interview prep with current affairs", tag: "Civil Services" },
  { title: "MPSC", desc: "Maharashtra state services complete preparation", tag: "State Services" },
  { title: "NEET", desc: "Biology, Physics and Chemistry for medical entrance", tag: "Medical" },
  { title: "JEE", desc: "Maths, Physics and Chemistry for IIT/NIT entrance", tag: "Engineering" },
  { title: "MBBS Prep", desc: "Foundation and clinical knowledge for medical students", tag: "Medical" },
  { title: "Engineering", desc: "Core engineering subjects - CSE, ECE, Mechanical, Civil", tag: "B.Tech / B.E." },
  { title: "CLAT / Law", desc: "Legal reasoning, GK and English for law entrance", tag: "Law" },
  { title: "CAT / MBA", desc: "Quant, verbal and DILR for top B-school admissions", tag: "Management" },
  { title: "Banking / IBPS", desc: "Reasoning, maths and English for bank exams", tag: "Banking" },
  { title: "NDA / Defence", desc: "Maths, GK and SSB prep for armed forces", tag: "Defence" },
  { title: "GATE", desc: "Advanced engineering and science for PSU / M.Tech", tag: "Postgrad" },
  { title: "CA / CMA", desc: "Accounts, taxation and finance professional courses", tag: "Finance" }
];

const langs = [
  'en', 'es', 'fr', 'de', 'ja', 'ko', 'hi', 'zh-CN', 'it', 'pt', 
  'ru', 'ar', 'mr', 'ta', 'te', 'bn', 'id', 'tr', 'nl', 'pl'
];

async function translateArray(arr, target) {
  if (target === 'en') return arr; // Skip English
  const res = [];
  for (const item of arr) {
    const translatedItem = {};
    for (const [k, v] of Object.entries(item)) {
       try {
         const { text } = await translate(v, { to: target });
         translatedItem[k] = text;
       } catch (err) {
         console.error(`Failed translates for ${v} to ${target}`);
         translatedItem[k] = v; // fallback
       }
    }
    res.push(translatedItem);
  }
  return res;
}

async function start() {
  const finalDict = {};
  for (const lang of langs) {
    console.log(`Translating to ${lang}...`);
    finalDict[lang === 'zh-CN' ? 'zh' : lang] = {
       kids: await translateArray(baseKids, lang),
       students: await translateArray(baseStudents, lang),
       exams: await translateArray(baseExams, lang)
    };
  }

  const fileContent = `export const cardsDictionary = ${JSON.stringify(finalDict, null, 2)};`;
  fs.writeFileSync('./app/locales/cardsDictionary.ts', fileContent);
  console.log("Written cardsDictionary.ts successfully!");
}

start();
