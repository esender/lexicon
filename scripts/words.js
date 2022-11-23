const fs = require('fs');
const GermanVerbsLib = require('german-verbs')
const GERMAN_VERBS_DICT = require('german-verbs-dict/dist/verbs.json')
const verbs = require('./verbs');

// const MODAL_VERBS = ['können', 'müssen', 'dürfen', 'wollen', 'sollen', 'mögen'];
// const EXCEPTION_VERBS = ['sein', 'haben', 'werden', 'wissen'];

function getStem(word) {
  if (word.endsWith('en')) {
    return word.substr(0, word.length - 2);
  }

  if (word.endsWith('ln') || word.endsWith('rn') || word === 'tun') {
    return word.substr(0, word.length - 1);
  }

  if ('sein' == word) {
    return word
  }

  throw new Error(`No stem for word ${word}`);
}

function getConjugation(word, person, type) {
  // Last three arguments required but not useful for present tense
  return GermanVerbsLib.getConjugation(GERMAN_VERBS_DICT, word, 'PRASENS', person, type)[0];
}

function getConjugations(word) {
  return {
    s1: getConjugation(word, 1, 'S'),
    s2: getConjugation(word, 2, 'S'),
    s3: getConjugation(word, 3, 'S'),
    p1: getConjugation(word, 1, 'P'),
    p2: getConjugation(word, 2, 'P'),
    p3: getConjugation(word, 3, 'P'),
  }
}

function isRegular(word, conjugations) {
  return Object.values(conjugations).every(form => form.startsWith(getStem(word)))
}

const wordsList = verbs.map(({ word, translation }) => {
  try {
    const conjugations = getConjugations(word);
    return {
      infinitive: word,
      type: isRegular(word, conjugations) ? "regular" : "irregular"
    }
  } catch(err) {}

  return null;
}).filter(v => v)

const individualWords = verbs.map(({ word, translation }) => {
  try {
    const conjugations = getConjugations(word)
    return {
      infinitive: word,
      stem: getStem(word),
      translation,
      conjugations,
      type: isRegular(word, conjugations) ? "regular" : "irregular"
    }  
  } catch(err) {
    // When can't get conjugation, just return null and ignore.
  }
  return null;
}).filter(v => v)

fs.writeFileSync('constants/verbs.js', `// Please don't change this file
// It's generated using scripts/words.js

const verbs = ${JSON.stringify(wordsList, null, 2).replace(/"([^"]+)":/g, '$1:')};

export default verbs;`);
console.log('Index file Done!');

individualWords.forEach(wordInfo => {
  fs.writeFileSync(`public/words/${wordInfo.infinitive}.json`, JSON.stringify(wordInfo));
})

console.log('Done!');



// https://app.memrise.com/course/1552402/500-verbs-sorted-by-frequency-from-tv/13/?action=next

// function collectWords(root) {
//   const colsA = Array.from(root.querySelectorAll('.col_a'));
//   const colsB = Array.from(root.querySelectorAll('.col_b'));

//   return colsA.map((word, index) => ({ word: word.textContent, translation: colsB[index].textContent }))
// };copy(collectWords($0));
