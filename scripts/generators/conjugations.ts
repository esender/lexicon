import glob from 'glob';
import fs from 'fs';
import path from 'path';
import * as fsExtra from "fs-extra";

const words: RawVerb[] = glob.sync('tmp/parsed_words/*.json').map(function(file) {
  return require(path.resolve(file));
})

function writeVerbsConstantsFile(words: RawVerb[]) {
  const wordsList = words.map(({ word, type }) => ({ word, type }));
  
  fs.writeFileSync('constants/verbs.js', `// Please don't change this file
// It's generated by scripts/generators/conjugations.ts
  
const verbs = ${JSON.stringify(wordsList, null, 2).replace(/"([^"]+)":/g, '$1:')};
  
export default verbs;`);
}

const PRONOUNS_TO_TYPE = {
  'ich': 's1',
  'du': 's2',
  'er/sie/es': 's3',
  'wir': 'p1',
  'ihr': 'p2',
  'Sie': 'p3'
} as const;

type Conjugation = {
  [key: string]: string;
}

type SplittedForm = string[] & {
  [index: number]: string;
  0: keyof typeof PRONOUNS_TO_TYPE
}

let invalid: Verb[] = []

function validateVerb(verb: Verb) {
  const isValid = verb.word && 
    verb.translation && 
    verb.type && 
    Object.keys(verb.conjugation).length === 6;

    if (!isValid) {
      invalid.push(verb)
    }
}

function generateAndWriteVerbJsonFile(word: RawVerb) {
  const conjugationForPresentTense = word.conjugations.find((c: {title: string}) => c.title === 'Indikativ Präsens')
  const conjugationsMap = conjugationForPresentTense
    .forms
    .splice(0, 6) // Sometimes there are more options, we need just 6 of them
    .map((s: Form) => s.split(' '))
    .reduce((acc: Conjugation, item: SplittedForm) => {
      const type = PRONOUNS_TO_TYPE[item[0]];
      if (type) {
        acc[type] = item.splice(1).join(' ');
      }
      return acc;
    }, {})

  const wordInfo = {
    word: word.word,
    translation: word.translation,
    type: word.type,
    conjugation: conjugationsMap
  };
  
  validateVerb(wordInfo)

  fs.writeFileSync(`public/words/${wordInfo.word}.json`, JSON.stringify(wordInfo));
}

// main
const WORDS_DIR = 'public/words/'

fsExtra.emptyDirSync(WORDS_DIR);

console.log('Writing verbs.js');
writeVerbsConstantsFile(words);
console.log('Writing verbs.js. Done!');

console.log('Generate verbs jsons.')
words.forEach(word => generateAndWriteVerbJsonFile(word));
console.log('Generate verbs jsons. Done!')
console.log('Invalid verbs: ', invalid.length, invalid.map(v => v.word).join(', '))