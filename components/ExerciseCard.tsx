import {
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Card,
  CardBody,
} from "@chakra-ui/react";
import Link from "./Link";

type ExerciseCardProps = {
  title: string;
  href: string;
  description: string;
};

export default function ExerciseCard({
  title,
  href,
  description,
}: ExerciseCardProps) {
  return (
    <LinkBox as="article">
      <Card variant="outline" w="full">
        <CardBody>
          <Heading fontSize="2xl" mb={1} fontFamily="body" fontWeight={500}>
            <LinkOverlay as={Link} href={href}>
              {title}
            </LinkOverlay>
          </Heading>
          <Text color="gray.500">{description}</Text>
        </CardBody>
      </Card>
    </LinkBox>
  );
}
