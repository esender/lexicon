import Head from "next/head";
import {
  Button,
  ButtonGroup,
  Heading,
  Box,
  Flex,
  Stack,
  Skeleton,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import React, { useCallback, useMemo, useState } from "react";
import verbs from "../../constants/verbs";
import shuffle from "lodash/shuffle";
import sample from "lodash/sample";
import { sampleSize } from "lodash";
import useVerb from "../../hooks/queries/useVerb";

function getRandom(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

type ConjugationTrainerProps = {
  word: string;
};

const PRONOUNS = {
  s1: ["ich"],
  s2: ["du"],
  s3: ["er", "sie(she)", "es"],
  p1: ["wir"],
  p2: ["ihr"],
  p3: ["sie(they)", "Sie"],
};

type ConjugationProps = {
  type: "s1" | "s2" | "s3" | "p1" | "p2" | "p3";
  correct: string;
  word: string;
  conjugation: { [key: string]: string };
};

type GenerateOptionsArgs = {
  correct: string;
  conjugation: { [key: string]: string };
};

const generateOptions = function ({
  correct,
  conjugation,
}: GenerateOptionsArgs) {
  const options = new Set(Object.values(conjugation));

  const opts = sampleSize(Array.from(options), 3);

  if (!opts.includes(correct)) {
    opts[0] = correct;
  }

  return shuffle(opts);
};

function Conjugation(props: ConjugationProps) {
  const { type, correct, conjugation } = props;
  let options = useMemo(
    () => generateOptions({ correct, conjugation }),
    [correct, conjugation]
  );
  let pronoun = useMemo(() => sample<string>(PRONOUNS[type]), [type]);

  let [answer, setAnswer] = useState<string>();

  return (
    <Tain
      question={pronoun}
      answers={options}
      onSelect={setAnswer}
      correctAnswer={correct}
      userAnswer={answer}
    />
  );
}

type TainProps = {
  onSelect: React.Dispatch<React.SetStateAction<string | undefined>>; // I am sure that here no case when undefined
  question: string | undefined; // I want only strng. I know that there is only string. How to do that?
  answers: string[];
  correctAnswer: string;
  userAnswer?: string;
};

function Tain({
  onSelect,
  question,
  answers,
  correctAnswer,
  userAnswer,
}: TainProps) {
  let getColorScheme = function (current: string) {
    if (!userAnswer) return "gray";

    if (correctAnswer === current) return "green";

    if (userAnswer === current) return "red";

    return "gray";
  };

  return (
    <Flex w="full" justifyContent="space-between">
      <Box>{question}</Box>
      <ButtonGroup>
        {answers.map((answer) => (
          <Button
            key={answer}
            size="sm"
            variant={userAnswer === answer ? "solid" : "outline"}
            colorScheme={getColorScheme(answer)}
            minW="14"
            onClick={userAnswer ? undefined : () => onSelect(answer)}
            opacity={
              userAnswer && userAnswer != answer && answer != correctAnswer
                ? 0.3
                : 1
            }
          >
            {answer}
          </Button>
        ))}
      </ButtonGroup>
    </Flex>
  );
}

type conjs = "s1" | "s2" | "s3" | "p1" | "p2" | "p3";

function ConjugationTrainer({ word }: ConjugationTrainerProps) {
  const { isError, isSuccess, data: wordInfo } = useVerb(word);

  if (isError) return <div>failed to load</div>;

  return (
    <Box textAlign="center">
      <Box mb={2}>
        <Skeleton isLoaded={isSuccess} display="inline-block" minW={200}>
          <Heading>{wordInfo?.word ?? "something"}</Heading>
        </Skeleton>
      </Box>
      <Skeleton isLoaded={isSuccess} display="inline-block" minW={200}>
        <Heading as="h3" size="md">
          {wordInfo?.translation ?? "something"}
        </Heading>
      </Skeleton>
      <br />
      <br />
      <Box maxW="500" m={"auto"}>
        <Stack direction="column">
          {isSuccess
            ? (Object.entries(wordInfo.conjugation) as [conjs, string][]).map(
                ([key, value]) => {
                  return (
                    <Conjugation
                      key={key + word}
                      type={key}
                      correct={value}
                      conjugation={wordInfo.conjugation}
                      word={word}
                    />
                  );
                }
              )
            : [0, 0, 0, 0, 0, 0].map((_, index) => (
                <Skeleton key={index} height={8}></Skeleton>
              ))}
        </Stack>
      </Box>
    </Box>
  );
}

type Verb = {
  word: string;
  type: "regular" | "irregular";
};

type TrainerProps = {
  verbs: Verb[];
};
const Trainer: React.FC<TrainerProps> = function ({ verbs }) {
  // How to handle this? Component might call onChange with string or number, but I know that there is only strings in my component
  const [filters, setFilters] = React.useState<(string | number)[]>([
    "regular",
    "irregular",
  ]);
  const filteredWords = React.useMemo(
    () => verbs.filter((verb) => filters.includes(verb.type)),
    [verbs, filters]
  );
  const [verb, setVerb] = React.useState<Verb>(getRandom(filteredWords));

  const resetVerb = useCallback(
    () => setVerb(getRandom(filteredWords)),
    [filteredWords]
  );

  return (
    <div>
      <Head>
        <title>Conjugation Trainer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>Present Tense Regular Verbs Conjugation</Heading>

      <CheckboxGroup onChange={setFilters} value={filters}>
        <Stack spacing={5} direction="row">
          <Checkbox value="regular">Regular</Checkbox>
          <Checkbox value="irregular">Irregular</Checkbox>
        </Stack>
      </CheckboxGroup>

      {verb && <ConjugationTrainer word={verb.word} />}
      <Button onClick={resetVerb}>Random Word</Button>
    </div>
  );
};

export default Trainer;

export async function getStaticProps() {
  return {
    props: {
      verbs,
    },
  };
}
