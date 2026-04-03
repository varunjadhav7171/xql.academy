import { translate } from '@vitalets/google-translate-api';
import fs from 'fs';

const delay = (ms) => new Promise(r => setTimeout(r, ms));

const kids = [
  ["ABC & Words","Learn alphabets, phonics and basic vocabulary"],
  ["Numbers & Math","Count, add and subtract with fun visual games"],
  ["World Around Us","Animals, nature, planets and amazing science facts"],
  ["Art & Creativity","Colors, shapes, drawing and creative expression"],
  ["Story Time","Interactive stories that build reading and imagination"],
  ["Speak & Learn","Pronounce words and build confidence speaking"],
  ["Puzzles & Logic","Brain teasers that sharpen thinking and problem solving"],
  ["Rhymes & Songs","Learn through music, rhythm and memory songs"]
];

const students = [
  ["Mathematics","Algebra, geometry, trigonometry and calculus","Class 6-12"],
  ["Science","Physics, chemistry and biology made visual","Class 6-12"],
  ["English","Grammar, comprehension, writing and literature","Class 1-12"],
  ["Social Studies","History, geography, civics and economics","Class 6-10"],
  ["Computer Sci.","Programming basics, MS Office and digital skills","Class 6-12"],
  ["Lab Practicals","Virtual experiments with step-by-step guidance","Class 9-12"],
  ["Essay Writing","Structure, vocabulary and writing skills for exams","Class 8-12"],
  ["Languages","Hindi, Sanskrit, French and regional languages","Class 1-12"]
];

const exams = [
  ["UPSC / IAS","Prelims, Mains and Interview prep with current affairs","Civil Services"],
  ["MPSC","Maharashtra state services complete preparation","State Services"],
  ["NEET","Biology, Physics and Chemistry for medical entrance","Medical"],
  ["JEE","Maths, Physics and Chemistry for IIT/NIT entrance","Engineering"],
  ["MBBS Prep","Foundation and clinical knowledge for medical students","Medical"],
  ["Engineering","Core engineering subjects - CSE, ECE, Mechanical, Civil","B.Tech / B.E."],
  ["CLAT / Law","Legal reasoning, GK and English for law entrance","Law"],
  ["CAT / MBA","Quant, verbal and DILR for top B-school admissions","Management"],
  ["Banking / IBPS","Reasoning, maths and English for bank exams","Banking"],
  ["NDA / Defence","Maths, GK and SSB prep for armed forces","Defence"],
  ["GATE","Advanced engineering and science for PSU / M.Tech","Postgrad"],
  ["CA / CMA","Accounts, taxation and finance professional courses","Finance"]
];

const targets = ['it','pt','ar','mr','ta','te','bn','id','tr','nl','pl'];

async function tr(text, to) {
  await delay(200);
  try { const r = await translate(text, {to}); return r.text; } catch { return text; }
}

async function run() {
  const result = {};
  for (const lang of targets) {
    console.log(`→ ${lang}`);
    result[lang] = { kids: [], students: [], exams: [] };
    for (const [t, d] of kids) {
      result[lang].kids.push({ title: await tr(t,lang), desc: await tr(d,lang) });
    }
    for (const [t, d, b] of students) {
      result[lang].students.push({ title: await tr(t,lang), desc: await tr(d,lang), badge: await tr(b,lang) });
    }
    for (const [t, d, tag] of exams) {
      result[lang].exams.push({ title: t, desc: await tr(d,lang), tag: await tr(tag,lang) });
    }
  }
  fs.writeFileSync('./missing-langs.json', JSON.stringify(result, null, 2));
  console.log('Done! Saved to missing-langs.json');
}

run();
