import {
  Flex,
  Text,
  MenuButton,
  Menu,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      margin="0px"
      padding="10px"
      height="12%"
      borderBottom="2px solid rgb(202, 91, 91)"
    >
      <Text className="test">Coder's Store</Text>
      {/* <div style={myStyles}>Hola</div> */}
      <Menu>
        <MenuButton as={Button}>Navegar</MenuButton>
        <MenuList>
          <MenuItem>Zapatillas</MenuItem>
          <MenuItem>Jordans</MenuItem>
        </MenuList>
      </Menu>
      <Button>Carrito</Button>
    </Flex>
  );
};
export default NavBar;
