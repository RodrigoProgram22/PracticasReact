import {
  Flex,
  Text,
  MenuButton,
  Menu,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
       <Link to="/inicio">
      <Text className="test">Coder's Store</Text>
       </Link>
      <Menu>
        <MenuButton as={Button}>Navegar</MenuButton>
        <MenuList>
          <Link to="/perfil">
            <MenuItem>Perfil usuario</MenuItem>
          </Link>
          <Link to="/productos">
            <MenuItem>Productos</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Button>Carrito</Button>
    </Flex>
  );
};
export default NavBar;
