import { Flex } from "@mantine/core";
import Brick from "../icons/Brick";
import Grain from "../icons/Grain";
import Rock from "../icons/Rock";
import Sheep from "../icons/Sheep";
import Wood from "../icons/Wood";
import InventoryItem from "./InventoryItem";

const Inventory = () => {
  return (
      <Flex gap="lg" justify={"space-evenly"}>
       <InventoryItem icon={<Brick/>} />
       <InventoryItem icon={<Wood/>} />
       <InventoryItem icon={<Sheep/>} />
       <InventoryItem icon={<Grain/>} />
       <InventoryItem icon={<Rock/>} />
      </Flex>
)
};

export default Inventory;

