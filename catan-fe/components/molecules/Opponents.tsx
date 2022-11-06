import { Flex } from "@mantine/core";
import OpponentCard from "./OpponentCard";

const Opponents = () => {
  return (
    <Flex gap="lg" direction="column" mt="md">
      <OpponentCard />
      <OpponentCard />
      <OpponentCard />
    </Flex>
  );
};

export default Opponents;
