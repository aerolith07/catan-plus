import { Button, Flex, Stack, Text, Title } from "@mantine/core";
import React from "react";
import BuyMenu from "./BuyMenu";
import Inventory from "./Inventory";

const Player = () => {
  return (
    <div className="playerCard">
      <Stack>
        <Flex gap="lg" justify={"space-between"}>
          <Title order={4}>Rahul</Title>
          <Title order={4} mr={0}>8</Title>
        </Flex>
        <Inventory />
        <Flex gap="xs" justify="center">
          <BuyMenu />
          <Button compact color='yellow'>Harbour</Button>
        </Flex>
      </Stack>
    </div>
  );
};

export default Player;
