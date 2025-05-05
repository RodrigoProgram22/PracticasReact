import {
  Flex,
  Text,
  MenuButton,
  Menu,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";

import CartWidget from "./CartWidget";

const NavBar = () => {
  return <Flex
    alignItems="center"
    justifyContent="space-between"
    width="100vw"
    margin="0px"
    padding="0 20px"
    height="10%"
    border="1px solid #2e2e2e"
  >
    <Text className="test">Coder's Store</Text>
    {/* <div style={myStyles}>Hola</div> */}
    <Menu>
      <MenuButton as={Button}>Actions</MenuButton>
      <MenuList>
        <MenuItem>Zapatillas</MenuItem>
        <MenuItem>Jordans</MenuItem>
      </MenuList>
    </Menu>
    <CartWidget />
  </Flex>;

};
export default NavBar;
