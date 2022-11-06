import { Box, Flex, Paper, Text } from "@mantine/core";
import Brick from "../icons/Brick";

const OpponentCard = () => {
  return (
    <Paper>
      <Flex p="sm" bg="black">
        <Box>
          <Text>Name</Text>
          <Text>8</Text>
        </Box>
        <Box p='xs'>
          <Brick />
          <Brick />
          <Brick />
          <Brick />
          <Brick />
        </Box>
      </Flex>
    </Paper>
  );
};

export default OpponentCard;
