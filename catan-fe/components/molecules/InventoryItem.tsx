import { ActionIcon, Grid, Stack } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons";

const InventoryItem = () => {
  return (

    <Stack>
      <ActionIcon>
        <IconPlus size={18} />
      </ActionIcon>
      <div>b</div>
      <ActionIcon>
        <IconMinus size={18} />
      </ActionIcon>
    </Stack>
  )
}

export default InventoryItem