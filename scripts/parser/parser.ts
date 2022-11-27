const cheerio = require('cheerio');
const lo = require('lodash');

type Conjugation = {
  title: string;
  forms: string[];
};

type VerbConjugation = {
  word: string;
  auxiliary: string;
  conjugations: Conjugation[];
}

const parseConjugations = function ($: cheerio.Root) {
  return $('.blue-box-wrap')
  .toArray()
  .map((el) => {
    const title = $(el).attr('mobile-title');
    const forms = $(el).find('ul li').toArray().map((el) => $(el).text())

    return {
      title,
      forms
    }
  })
  .filter((item): item is Conjugation => !!item.title);
}

const parseVerb = async function(verb: string): Promise<VerbConjugation> {
  const url = `https://conjugator.reverso.net/conjugation-german-verb-${verb}.html`;

  const response = await fetch(url)
  const html = await response.text()

  const $ = cheerio.load(html)

  return {
    word: $('.targetted-word-transl').text() || verb,
    auxiliary: $('#ch_lblAuxiliary').text(),
    conjugations: parseConjugations($)
  }
}

export default parseVerb;