const irregularVerbs = [
  {
      word: "befehlen",
      translation: "to command"
  },
  {
      word: "beginnen",
      translation: "to begin"
  },
  {
      word: "beißen",
      translation: "to bite"
  },
  {
      word: "beschreiben",
      translation: "to describe"
  },
  {
      word: "bieten",
      translation: "to offer"
  },
  {
      word: "binden",
      translation: "to bind"
  },
  {
      word: "bleiben",
      translation: "to remain"
  },
  {
      word: "brechen",
      translation: "to break"
  },
  {
      word: "dürfen",
      translation: "to be allowed (may)"
  },
  {
      word: "empfangen",
      translation: "to receive"
  },
  {
      word: "empfehlen",
      translation: "to recommend"
  },
  {
      word: "empfinden",
      translation: "to feel"
  },
  {
      word: "erschrecken",
      translation: "to frighten"
  },
  {
      word: "erziehen",
      translation: "to bring up"
  },
  {
      word: "essen",
      translation: "to eat"
  },
  {
      word: "fahren",
      translation: "to drive"
  },
  {
      word: "fallen",
      translation: "to fall"
  },
  {
      word: "fangen",
      translation: "to catch"
  },
  {
      word: "fernsehen",
      translation: "to watch TV"
  },
  {
      word: "finden",
      translation: "to find"
  },
  {
      word: "fliegen",
      translation: "to fly"
  },
  {
      word: "fliehen",
      translation: "to flee"
  },
  {
      word: "fließen",
      translation: "to flow"
  },
  {
      word: "frieren",
      translation: "to freeze"
  },
  {
      word: "geben",
      translation: "to give"
  },
  {
      word: "gefallen",
      translation: "to please"
  },
  {
      word: "gehen",
      translation: "to go"
  },
  {
      word: "gelingen",
      translation: "to be successful"
  },
  {
      word: "genießen",
      translation: "to enjoy"
  },
  {
      word: "geschehen",
      translation: "to happen"
  },
  {
      word: "gewinnen",
      translation: "to win"
  },
  {
      word: "gießen",
      translation: "to pour"
  },
  {
      word: "gleichen",
      translation: "to resemble"
  },
  {
      word: "greifen",
      translation: "to grasp"
  },
  {
      word: "haben",
      translation: "to have"
  },
  {
      word: "halten",
      translation: "to hold / to stop"
  },
  {
      word: "hängen",
      translation: "to hang"
  },
  {
      word: "heißen",
      translation: "to be called"
  },
  {
      word: "helfen",
      translation: "to help"
  },
  {
      word: "kommen",
      translation: "to come"
  },
  {
      word: "können",
      translation: "to be able (can)"
  },
  {
      word: "kriechen",
      translation: "to crawl"
  },
  {
      word: "laden",
      translation: "to load"
  },
  {
      word: "lassen",
      translation: "to let"
  },
  {
      word: "laufen",
      translation: "to run, walk"
  },
  {
      word: "leiden",
      translation: "to suffer"
  },
  {
      word: "leihen",
      translation: "to lend / to borrow"
  },
  {
      word: "lesen",
      translation: "to read"
  },
  {
      word: "liegen",
      translation: "to lie (lie down)"
  },
  {
      word: "lügen",
      translation: "to lie (tell a falsehood)"
  },
  {
      word: "mögen",
      translation: "to like"
  },
  {
      word: "müssen",
      translation: "to have to (must)"
  },
  {
      word: "nehmen",
      translation: "to take"
  },
  {
      word: "pfeifen",
      translation: "to whistle"
  },
  {
      word: "raten",
      translation: "to guess / to advise"
  },
  {
      word: "reißen",
      translation: "to rip"
  },
  {
      word: "reiten",
      translation: "to ride"
  },
  {
      word: "riechen",
      translation: "to smell"
  },
  {
      word: "rufen",
      translation: "to call"
  },
  {
      word: "scheinen",
      translation: "to shine / to seem"
  },
  {
      word: "schieben",
      translation: "to push"
  },
  {
      word: "schießen",
      translation: "to shoot"
  },
  {
      word: "schlafen",
      translation: "to sleep"
  },
  {
      word: "schlagen",
      translation: "to hit, strike"
  },
  {
      word: "schließen",
      translation: "to close"
  },
  {
      word: "schneiden",
      translation: "to cut"
  },
  {
      word: "schreiben",
      translation: "to write"
  },
  {
      word: "schreien",
      translation: "to scream, cry"
  },
  {
      word: "schreiten",
      translation: "to stride, step"
  },
  {
      word: "schweigen",
      translation: "to be silent"
  },
  {
      word: "schwimmen",
      translation: "to swim"
  },
  {
      word: "sehen",
      translation: "to see"
  },
  {
      word: "sein",
      translation: "to be"
  },
  {
      word: "singen",
      translation: "to sing"
  },
  {
      word: "sinken",
      translation: "to sink"
  },
  {
      word: "sitzen",
      translation: "to sit"
  },
  {
      word: "sollen",
      translation: "to ought to (should)"
  },
  {
      word: "sprechen",
      translation: "to speak"
  },
  {
      word: "springen",
      translation: "to jump"
  },
  {
      word: "stehen",
      translation: "to stand"
  },
  {
      word: "stehlen",
      translation: "to steal"
  },
  {
      word: "steigen",
      translation: "to climb, mount"
  },
  {
      word: "sterben",
      translation: "to die"
  },
  {
      word: "streiten",
      translation: "to quarrel"
  },
  {
      word: "tragen",
      translation: "to carry / to wear"
  },
  {
      word: "treffen",
      translation: "to meet"
  },
  {
      word: "treten",
      translation: "to step"
  },
  {
      word: "trinken",
      translation: "to drink"
  },
  {
      word: "trügen",
      translation: "to deceive"
  },
  {
      word: "tun",
      translation: "to do"
  },
  {
      word: "unterbrechen",
      translation: "to interrupt"
  },
  {
      word: "unternehmen",
      translation: "to undertake"
  },
  {
      word: "verbieten",
      translation: "to forbid"
  },
  {
      word: "verderben",
      translation: "to spoil"
  },
  {
      word: "vergessen",
      translation: "to forget"
  },
  {
      word: "verlassen",
      translation: "to leave"
  },
  {
      word: "verlieren",
      translation: "to lose"
  },
  {
      word: "vermeiden",
      translation: "to avoid"
  },
  {
      word: "verzeihen",
      translation: "to forgive"
  },
  {
      word: "wachsen",
      translation: "to grow"
  },
  {
      word: "waschen",
      translation: "to wash"
  },
  {
      word: "weichen",
      translation: "to yield / give way"
  },
  {
      word: "werben",
      translation: "to advertise"
  },
  {
      word: "werden",
      translation: "to become"
  },
  {
      word: "werfen",
      translation: "to throw"
  },
  {
      word: "wiegen",
      translation: "to weigh / to cradle"
  },
  {
      word: "wissen",
      translation: "to know (a fact)"
  },
  {
      word: "wollen",
      translation: "to want"
  },
  {
      word: "wringen",
      translation: "to wring"
  },
  {
      word: "ziehen",
      translation: "to pull / to move"
  },
  {
      word: "zwingen",
      translation: "to force"
  }
]

export default irregularVerbs.map(verb => ({...verb, type: "irregular"}));