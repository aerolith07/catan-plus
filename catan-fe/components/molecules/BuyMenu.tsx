import { Button, Modal, Text } from "@mantine/core";
import { useState } from "react";

const BuyMenu = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
    <Button compact color='yellow' onClick={() => setOpened(true)}>Buy</Button>
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      withCloseButton={false}
      centered
      >
      <Text size={'xs'}>Hello</Text>
    </Modal>
        </>
  );
};

export default BuyMenu;
