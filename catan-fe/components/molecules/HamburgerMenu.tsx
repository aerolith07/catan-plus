import {
  ActionIcon,
  Burger,
  Button,
  Menu,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonStars, IconSettings, IconSun } from "@tabler/icons";
import { useState } from "react";

const HamburgerMenu = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [opened, setOpened] = useState(false);
  return (
    <Menu>
      <Menu.Target>
        <Burger
          opened={opened}
          size="sm"
          onClick={() => setOpened((v) => !v)}
        />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item
          onClick={() => toggleColorScheme()}
          icon={dark ? <IconSun size={14} /> : <IconMoonStars size={18} />}
        >
          Toggle Theme
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HamburgerMenu;
