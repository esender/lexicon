// List of German verbs with translation
const VERBS = [
  {
    word: "machen",
    translation: "to make; to prepare (e.g. food); to do"
  },
  {
    word: "sagen",
    translation: "to say; to tell"
  },
  {
    word: "meinen",
    translation: "to be of the opinion; to mean"
  },
  {
    word: "glauben",
    translation: "to believe; to think"
  },
  {
    word: "passieren",
    translation: "to happen; to move beyond; to strain"
  },
  {
    word: "reden",
    translation: "to speak; to talk"
  },
  {
    word: "hören",
    translation: "to hear; to listen to"
  },
  {
    word: "brauchen",
    translation: "to need"
  },
  {
    word: "lieben",
    translation: "to love"
  },
  {
    word: "bringen",
    translation: "to bring; to take; to lead"
  },
  {
    word: "töten",
    translation: "to kill"
  },
  {
    word: "bekommen",
    translation: "to receive; to catch (e.g. a cold); to sit well with so."
  },
  {
    word: "warten",
    translation: "to wait; to maintain (e.g. a car)"
  },
  {
    word: "kennen",
    translation: "to know; to be acquainted with; to be familiar with"
  },
  {
    word: "verstehen",
    translation: "to understand; to get along with so./sth."
  },
  {
    word: "denken",
    translation: "to think; to consider"
  },
  {
    word: "leben",
    translation: "to live; to reside"
  },
  {
    word: "stimmen",
    translation: "to be true (usu. \"stimmt\"); to vote; to tune"
  },
  {
    word: "arbeiten",
    translation: "to work"
  },
  {
    word: "spielen",
    translation: "to play"
  },
  {
    word: "versuchen",
    translation: "to try"
  },
  {
    word: "erzählen",
    translation: "to tell; to narrate"
  },
  {
    word: "bedeuten",
    translation: "to mean; to signify"
  },
  {
    word: "fragen",
    translation: "to ask; to wonder (refl.)"
  },
  {
    word: "bestimmen",
    translation: "to determine"
  },
  {
    word: "hoffen",
    translation: "to hope"
  },
  {
    word: "suchen",
    translation: "to seek; to search"
  },
  {
    word: "zeigen",
    translation: "to point at; to demonstrate"
  },
  {
    word: "kriegen",
    translation: "to get; to come down with"
  },
  {
    word: "holen",
    translation: "to fetch"
  },
  {
    word: "retten",
    translation: "to save; to rescue"
  },
  {
    word: "lernen",
    translation: "to learn; to study (revise/review materials); to train sth."
  },
  {
    word: "schaffen",
    translation: "to create; to produce"
  },
  {
    word: "funktionieren",
    translation: "to work, function"
  },
  {
    word: "stellen",
    translation: "to pose (a question); to position; to put; to catch"
  },
  {
    word: "nennen",
    translation: "to name; to mention"
  },
  {
    word: "fühlen",
    translation: "to feel; to feel sth. (good/bad) (refl.)"
  },
  {
    word: "erinnern",
    translation: "to remind; to remember (refl.)"
  },
  {
    word: "kämpfen",
    translation: "to fight, to struggle"
  },
  {
    word: "heiraten",
    translation: "to marry"
  },
  {
    word: "erklären",
    translation: "to explain; to declare; to assert"
  },
  {
    word: "kaufen",
    translation: "to buy"
  },
  {
    word: "hassen",
    translation: "to hate"
  },
  {
    word: "umbringen",
    translation: "to kill, to murder; to be very angry at so."
  },
  {
    word: "kümmern",
    translation: "to take care (refl.); to trouble, to concern"
  },
  {
    word: "verletzen",
    translation: "to hurt, to injure; to violate (rules, laws, etc.)"
  },
  {
    word: "anrufen",
    translation: "to call by telephone; to call on (so., e.g. a divine being)"
  },
  {
    word: "aufhören",
    translation: "to stop; to cease from (mit) sth."
  },
  {
    word: "vorstellen",
    translation: "to move forward; to represent; to introduce"
  },
  {
    word: "verschwinden",
    translation: "to disappear; to get lost"
  },
  {
    word: "erwarten",
    translation: "to expect; to await"
  },
  {
    word: "führen",
    translation: "to lead; to conduct; to direct"
  },
  {
    word: "anfangen",
    translation: "to begin (not \"beginnen\")"
  },
  {
    word: "klingen",
    translation: "to sound"
  },
  {
    word: "setzen",
    translation: "to set; to sit down (refl.)"
  },
  {
    word: "benutzen",
    translation: "to use"
  },
  {
    word: "schicken",
    translation: "to send"
  },
  {
    word: "erfahren",
    translation: "to experience"
  },
  {
    word: "bezahlen",
    translation: "to pay"
  },
  {
    word: "schätzen",
    translation: "to guess; to evaluate; to appreciate"
  },
  {
    word: "bitten",
    translation: "to ask, to request"
  },
  {
    word: "behalten",
    translation: "to keep"
  },
  {
    word: "verkaufen",
    translation: "to sell"
  },
  {
    word: "verdienen",
    translation: "to earn"
  },
  {
    word: "wünschen",
    translation: "to wish"
  },
  {
    word: "verheiraten",
    translation: "to marry (to perform the marriage); to get married (refl.)"
  },
  {
    word: "verdammen",
    translation: "to condemn; to damn"
  },
  {
    word: "stecken",
    translation: "to stick; to pin"
  },
  {
    word: "passen",
    translation: "to fit; to suit"
  },
  {
    word: "verändern",
    translation: "to alter; to change"
  },
  {
    word: "folgen",
    translation: "to follow"
  },
  {
    word: "zerstören",
    translation: "to destroy"
  },
  {
    word: "entschuldigen",
    translation: "to excuse; to apologise"
  },
  {
    word: "beschützen",
    translation: "to protect"
  },
  {
    word: "bewegen",
    translation: "to move"
  },
  {
    word: "erwischen",
    translation: "to catch so./sth.; to catch so. unprepared"
  },
  {
    word: "vertrauen",
    translation: "to trust"
  },
  {
    word: "erreichen",
    translation: "to reach"
  },
  {
    word: "versprechen",
    translation: "to promise; to hope for; to misspeak"
  },
  {
    word: "erledigen",
    translation: "to finish; to take care of"
  },
  {
    word: "drehen",
    translation: "to turn; to veer"
  },
  {
    word: "schwören",
    translation: "to swear; to take an oath"
  },
  {
    word: "aussehen",
    translation: "to appear, to look (like)"
  },
  {
    word: "verlieben",
    translation: "to fall in love (refl.)"
  },
  {
    word: "verraten",
    translation: "to betray; to reveal"
  },
  {
    word: "gebären",
    translation: "to give birth"
  },
  {
    word: "aufhalten",
    translation: "to halt; to stay (in a place)"
  },
  {
    word: "dauern",
    translation: "to last; to take (time)"
  },
  {
    word: "verstecken",
    translation: "to hide"
  },
  {
    word: "beschäftigen",
    translation: "to concern oneself with sth. (usu. \"beschäftigt\")"
  },
  {
    word: "tanzen",
    translation: "to dance"
  },
  {
    word: "fehlen",
    translation: "to lack; to be absent"
  },
  {
    word: "öffnen",
    translation: "to open"
  },
  {
    word: "entscheiden",
    translation: "to decide"
  },
  {
    word: "entfernen",
    translation: "to remove; to recede; to deviate; to desert (military)"
  },
  {
    word: "gehören",
    translation: "to belong"
  },
  {
    word: "zahlen",
    translation: "to pay (for sth.); to atone for"
  },
  {
    word: "legen",
    translation: "to lay; to lean; to lie down"
  },
  {
    word: "erhalten",
    translation: "to maintain; to receive; to save"
  },
  {
    word: "sorgen",
    translation: "to care; to worry"
  },
  {
    word: "schauen",
    translation: "to look at sth."
  },
  {
    word: "lachen",
    translation: "to laugh"
  },
  {
    word: "beweisen",
    translation: "to prove"
  },
  {
    word: "fürchten",
    translation: "to fear; to be afraid"
  },
  {
    word: "überraschen",
    translation: "to surprise"
  },
  {
    word: "besorgen",
    translation: "to obtain; to manage"
  },
  {
    word: "besuchen",
    translation: "to visit"
  },
  {
    word: "ändern",
    translation: "to change"
  },
  {
    word: "mitnehmen",
    translation: "to carry along; to pick up; to take away"
  },
  {
    word: "leisten",
    translation: "to perform; to afford (refl.)"
  },
  {
    word: "entkommen",
    translation: "to escape"
  },
  {
    word: "vermissen",
    translation: "to miss sth./so.; to have sth. missing"
  },
  {
    word: "überleben",
    translation: "to survive"
  },
  {
    word: "wetten",
    translation: "to bet"
  },
  {
    word: "erkennen",
    translation: "to recognise; to realise"
  },
  {
    word: "wohnen",
    translation: "to live, to reside, to dwell"
  },
  {
    word: "teilen",
    translation: "to split, to share; to divide"
  },
  {
    word: "erschießen",
    translation: "to shoot dead"
  },
  {
    word: "übernehmen",
    translation: "to take over"
  },
  {
    word: "danken",
    translation: "to thank"
  },
  {
    word: "bauen",
    translation: "to build: to roll a joint"
  },
  {
    word: "schützen",
    translation: "to defend; to protect"
  },
  {
    word: "beenden",
    translation: "to finish, to complete; to terminate"
  },
  {
    word: "verpassen",
    translation: "to miss (to be late for sth., e.g. a train)"
  },
  {
    word: "fassen",
    translation: "to grasp"
  },
  {
    word: "verhaften",
    translation: "to detain, to take into custody"
  },
  {
    word: "unterhalten",
    translation: "to maintain; to entertain; to converse (refl.)"
  },
  {
    word: "aufpassen",
    translation: "to watch out; to look after something; to be attentive with sth."
  },
  {
    word: "mitbringen",
    translation: "to bring along, to bring with"
  },
  {
    word: "melden",
    translation: "to report"
  },
  {
    word: "bestehen",
    translation: "to succeed, to pass (an exam); to consist (aus (\"of\")); to exist; to insist (auf (\"on\"))"
  },
  {
    word: "planen",
    translation: "to plan"
  },
  {
    word: "betrinken",
    translation: "to get drunk (refl.)"
  },
  {
    word: "mitkommen",
    translation: "to come with so., to understand sth."
  },
  {
    word: "nachdenken",
    translation: "to think, to reflect"
  },
  {
    word: "ermorden",
    translation: "to murder"
  },
  {
    word: "freuen",
    translation: "to make glad; to be glad (über sth.) (refl.); to look forward (auf sth.) (refl.)"
  },
  {
    word: "aufgeben",
    translation: "to give up on; to give up (refl.); to abandon"
  },
  {
    word: "verbringen",
    translation: "to spend (time)"
  },
  {
    word: "verfolgen",
    translation: "to pursue; to persecute; to trace"
  },
  {
    word: "bemerken",
    translation: "to notice"
  },
  {
    word: "weinen",
    translation: "to weep, cry"
  },
  {
    word: "küssen",
    translation: "to kiss; to make out"
  },
  {
    word: "behandeln",
    translation: "to treat (medicinally); to treat (physically); to cover (a subject)"
  },
  {
    word: "entdecken",
    translation: "to discover, to spot"
  },
  {
    word: "lauten",
    translation: "to sound; to read (have a certain wording)"
  },
  {
    word: "hingehen",
    translation: "to go (there); (of time) to pass"
  },
  {
    word: "feuern",
    translation: "to fire (a weapon); to fire (terminate employment)"
  },
  {
    word: "gebrauchen",
    translation: "to use, to utilise"
  },
  {
    word: "verhindern",
    translation: "to prevent, to inhibit"
  },
  {
    word: "erwähnen",
    translation: "to mention (to speak of something)"
  },
  {
    word: "erlauben",
    translation: "to permit (with dative)"
  },
  {
    word: "einladen",
    translation: "to invite; to load (something into a container)"
  },
  {
    word: "angreifen",
    translation: "to attack"
  },
  {
    word: "zulassen",
    translation: "to allow; to license (for a car)"
  },
  {
    word: "verlangen",
    translation: "to ask for, demand"
  },
  {
    word: "lösen",
    translation: "to loosen; to separate; to remove; to solve"
  },
  {
    word: "vorbereiten",
    translation: "to prepare"
  },
  {
    word: "überprüfen",
    translation: "to check"
  },
  {
    word: "stören",
    translation: "to disturb, to interfere"
  },
  {
    word: "kontrollieren",
    translation: "to control; to check"
  },
  {
    word: "gelten",
    translation: "to be valid; to be effective; to be worth"
  },
  {
    word: "zurückkommen",
    translation: "to return (to come back)"
  },
  {
    word: "hinterlassen",
    translation: "to leave; to leave behind; to bequeath"
  },
  {
    word: "jagen",
    translation: "to hunt"
  },
  {
    word: "enden",
    translation: "to end"
  },
  {
    word: "irren",
    translation: "to err (refl.)"
  },
  {
    word: "merken",
    translation: "to notice; to remember (refl.); to realise"
  },
  {
    word: "abholen",
    translation: "to collect, pick up so. or sth."
  },
  {
    word: "stoppen",
    translation: "to stop"
  },
  {
    word: "klauen",
    translation: "to steal"
  },
  {
    word: "entführen",
    translation: "to abduct, to kidnap"
  },
  {
    word: "überlegen",
    translation: "to think, to think over"
  },
  {
    word: "reparieren",
    translation: "to repair"
  },
  {
    word: "ausgehen",
    translation: "to go out; to run out (e.g. of money)"
  },
  {
    word: "überzeugen",
    translation: "to convince; to convince oneself (refl.)"
  },
  {
    word: "erwachsen",
    translation: "to grow up; to spring up; to accrue"
  },
  {
    word: "annehmen",
    translation: "to assume; to receive; to accept"
  },
  {
    word: "zählen",
    translation: "to count"
  },
  {
    word: "vergeben",
    translation: "to set (work); to forgive; to assign"
  },
  {
    word: "landen",
    translation: "to land (a plane)"
  },
  {
    word: "trennen",
    translation: "to separate, part, uncouple; to disonnect; to isolate"
  },
  {
    word: "verbinden",
    translation: "to join, to connect; to bandage"
  },
  {
    word: "aufnehmen",
    translation: "to pick up; to receive; to take in; to record"
  },
  {
    word: "verursachen",
    translation: "to cause"
  },
  {
    word: "trauen",
    translation: "to trust; to marry; to dare (refl.)"
  },
  {
    word: "klappen",
    translation: "to clap; to fold; to work (out) (coll.)"
  },
  {
    word: "umgehen",
    translation: "to avoid, to go around"
  },
  {
    word: "wählen",
    translation: "to choose; to dial (a number); to vote"
  },
  {
    word: "existieren",
    translation: "to exist"
  },
  {
    word: "befinden",
    translation: "to be located (refl.); to find, to consider (formal)"
  },
  {
    word: "weitermachen",
    translation: "go on, keep going, continue to do something"
  },
  {
    word: "rauchen",
    translation: "to smoke (e.g. a cigarete)"
  },
  {
    word: "aufregen",
    translation: "to annoy, to upset (refl.)"
  },
  {
    word: "entlassen",
    translation: "to release (a prisoner or patient); to dismiss (from a job)"
  },
  {
    word: "entwickeln",
    translation: "to develop"
  },
  {
    word: "beobachten",
    translation: "to watch, to observe"
  },
  {
    word: "geraten",
    translation: "to turn out, succed; to thrive"
  },
  {
    word: "besprechen",
    translation: "to discuss"
  },
  {
    word: "angehen",
    translation: "to concern; to tackle (a problem); to turn on (a machine)"
  },
  {
    word: "kapieren",
    translation: "to understand intellectually (coll.); to get (coll.)"
  },
  {
    word: "ertragen",
    translation: "to bear, to stand"
  },
  {
    word: "beeilen",
    translation: "to hurry, to hasten, to rush (refl.)"
  },
  {
    word: "abhauen",
    translation: "to cut off (cutting weapon); to do a runner; to piss off"
  },
  {
    word: "abschließen",
    translation: "to end, to complete; to shut off; to lock up; to conclude (a contract, deal)"
  },
  {
    word: "enttäuschen",
    translation: "to disappoint"
  },
  {
    word: "ergeben",
    translation: "to produce; to surrender (refl.); to arise, result, turn out"
  },
  {
    word: "schmecken",
    translation: "to taste"
  },
  {
    word: "riskieren",
    translation: "to risk"
  },
  {
    word: "konzentrieren",
    translation: "to concentrate"
  },
  {
    word: "übergeben",
    translation: "to hand over; to vomit (refl.)"
  },
  {
    word: "befreien",
    translation: "to free (make free)"
  },
  {
    word: "starten",
    translation: "to start (car, airplane, etc); to start sth."
  },
  {
    word: "vernichten",
    translation: "to destroy; to ruin; to annihilate; to eradicate"
  },
  {
    word: "wahren",
    translation: "to protect, to safeguard; to maintain, to preserve"
  },
  {
    word: "spüren",
    translation: "to sense"
  },
  {
    word: "betreffen",
    translation: "to concern, to affect"
  },
  {
    word: "antworten",
    translation: "to answer, to reply"
  },
  {
    word: "ankommen",
    translation: "to arrive; to depend (auf sth.)"
  },
  {
    word: "begleiten",
    translation: "to accompany; to conduct, escort"
  },
  {
    word: "akzeptieren",
    translation: "to accept"
  },
  {
    word: "stammen",
    translation: "to descend, originate, be derived"
  },
  {
    word: "zuhören",
    translation: "to listen to so./sth. (with dative)"
  },
  {
    word: "begegnen",
    translation: "to meet, encounter (with dative)"
  }
]

export default VERBS.map(v => ({ ...v, type: "regular" }));