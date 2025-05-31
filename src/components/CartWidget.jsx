import { FaShoppingCart } from "react-icons/fa";
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Menu>
        <MenuButton colorScheme="red" as={Button}>
          <SimpleGrid columns={2} spacing={2} p={2} alignItems={"center"}>
            <FaShoppingCart size={30} color="white" />
            {totalItems}
          </SimpleGrid>
        </MenuButton>
        <MenuList>
          <SimpleGrid columns={1} spacing={2} p={2}>
            {cart.length === 0 ? (
              <p>No hay productos en el carrito</p>
            ) : (
              cart.map((item) => (
                <SimpleGrid key={item.id} columns={2} spacing={1}>
                  <div>{item.title}</div>
                  <div> Cantidad: {item.quantity}</div>
                </SimpleGrid>
              ))
            )}
          </SimpleGrid>
          <Text textAlign="center">Total de productos : {totalItems}</Text>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default CartWidget;
