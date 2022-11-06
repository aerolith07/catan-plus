import { ActionIcon,Text, Flex, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";
import Menu from "../molecules/HamburgerMenu";

type Props = {};

const Header = (props: Props) => {

  return (
    <Flex justify="space-between" bg='gray' p='xs'>
      <Text>Catan</Text>
      <Menu />
    </Flex>
  );
};

export default Header;
