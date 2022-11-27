type Pronouns = 'ich' | 'du' | 'er/sie/es' | 'wir' | 'ihr' | 'Sie';

type Form = `${Pronouns} ${string}`

type RawConjugation = {
  title: string;
  forms: Form[];
}

type RawVerb = {
  word: string;
  auxiliary: string;
  conjugations: RawConjugation[];
  translation: string;
  type: "regular" | "irregular";
}

type Verb = {
  word: string;
  translation: string;
  type: "regular" | "irregular";
  conjugation: {
    [key: string]: string;
  };
}