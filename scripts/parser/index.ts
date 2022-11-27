import fs from 'fs';
import lo from 'lodash';

import parseVerb from './parser';
import irregularVerbs from './data/irregular_verbs';
import regularVerbs from './data/regular_verbs';

type Verb = {
  word: string;
  translation: string;
  type: "regular" | "irregular";
}

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function parseVerbs(verbs: Verb[]) {
  const total = verbs.length;
  let processed = 0;
  for (const {word: verb, translation, type } of verbs) {
    const path = `tmp/parsed_words/${verb}.json`;
    if (fs.existsSync(path)) {
      console.log(`Skipping. File for word ${verb} already exists. Left ${total - processed} words.`);
    } else {
      const data = await parseVerb(verb);

      fs.writeFileSync(path, JSON.stringify({...data, translation, type}, null, 2));
      const timeout = lo.random(30_000, 60_000);
      console.log(`Word ${verb} was parsed. Timeout: ${timeout / 1000} sec. Left ${total - processed} words.`)
      await sleep(timeout)
    }
    processed++;
  }
}

parseVerbs(lo.shuffle([...irregularVerbs, ...regularVerbs] as Verb[]))