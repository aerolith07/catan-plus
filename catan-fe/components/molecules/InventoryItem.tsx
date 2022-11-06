import { ActionIcon, Grid, Stack } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons";

type InventoryItemProps = {
  icon: JSX.Element;
}

const InventoryItem = ({icon}:InventoryItemProps) => {
  return (

    <Stack>
      <ActionIcon color={'green'} variant='filled'>
        <IconPlus size={18} />
      </ActionIcon>
      {icon}
      <ActionIcon color={'red'} variant='filled'>
        <IconMinus size={18} />
      </ActionIcon>
    </Stack>
  )
}

export default InventoryItem