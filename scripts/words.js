const GermanVerbsLib = require('german-verbs')
const GermanVerbsDict = require('german-verbs-dict/dist/verbs.json')
const fs = require('fs');

const GERMAN_VERBS_DICT = GermanVerbsDict;

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

function getConjufations(word) {
  return {
    s1: getConjugation(word, 1, 'S'),
    s2: getConjugation(word, 2, 'S'),
    s3: getConjugation(word, 3, 'S'),
    p1: getConjugation(word, 1, 'P'),
    p2: getConjugation(word, 2, 'P'),
    p3: getConjugation(word, 3, 'P'),
  }
}

const words = [
  "sein",
  "haben",
  "werden",
  "können",
  "müssen",
  "sagen",
  "machen",
  "geben",
  "kommen",
  "sollen",
  "wollen",
  "gehen",
  "wissen",
  "sehen",
  "lassen",
  "stehen",
  "finden",
  "bleiben",
  "liegen",
  "heißen",
  "denken",
  "nehmen",
  "tun",
  "dürfen",
  "glauben",
  "halten",
  "nennen",
  "mögen",
  "zeigen",
  "führen",
  "sprechen",
  "bringen",
  "leben",
  "fahren",
  "meinen",
  "fragen",
  "kennen",
  "gelten",
  "stellen",
  "spielen",
  "arbeiten",
  "brauchen",
  "folgen",
  "lernen",
  "bestehen",
  "verstehen",
  "setzen",
  "bekommen",
  "beginnen",
  "erzählen",
  "versuchen",
  "schreiben",
  "laufen",
  "erklären",
  "entsprechen",
  "sitzen",
  "ziehen",
  "scheinen",
  "fallen",
  "gehören",
  "entstehen",
  "erhalten",
  "treffen",
  "suchen",
  "legen",
  "vorstellen",
  "handeln",
  "erreichen",
  "tragen",
  "schaffen",
  "lesen",
  "verlieren",
  "darstellen",
  "erkennen",
  "entwickeln",
  "reden",
  "aussehen",
  "erscheinen",
  "bilden",
  "anfangen",
  "erwarten",
  "wohnen",
  "betreffen",
  "warten",
  "vergehen",
  "helfen",
  "gewinnen",
  "schließen",
  "fühlen",
  "bieten",
  "interessieren",
  "erinnern",
  "ergeben",
  "anbieten",
  "studieren",
  "verbinden",
  "ansehen",
  "fehlen",
  "bedeuten",
  "vergleichen"]

const wordsList = words.map(word => ({
  infinitive: word,
  isRegular: Object.values(getConjufations(word)).every(form => form.startsWith(getStem(word)))
}))

const individualWords = words.map(word => {
  const conjugations = getConjufations(word)
  return {
    infinitive: word,
    stem: getStem(word),
    conjugations,
    isRegular: Object.values(conjugations).every(form => form.startsWith(getStem(word)))
  }
})

fs.writeFileSync('public/words/index.json', JSON.stringify(wordsList));
console.log('Index file Done!');

individualWords.forEach(wordInfo => {
  fs.writeFileSync(`public/words/${wordInfo.infinitive}.json`, JSON.stringify(wordInfo));
})

console.log('Done!');