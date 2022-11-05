import { ActionIcon, Container, Flex, Grid, Stack } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons";
import InventoryItem from "./InventoryItem";

const Inventory = () => {
  return (

      <Flex gap="lg" justify={"space-evenly"}>
       <InventoryItem />
       <InventoryItem />
       <InventoryItem />
       <InventoryItem />
       <InventoryItem />
      </Flex>
)
};

export default Inventory;

