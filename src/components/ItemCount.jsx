import { Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
const ItemCount = ({product}) => {
    const {agregarAlCarrito,quitarDelCarrito} = useContext(CartContext);
  return (
    <Box>
      <Button colorScheme="red" marginX={2} onClick={()=>{agregarAlCarrito(product)}}>Añadir Producto</Button>
      <Button colorScheme="red" onClick={()=>{quitarDelCarrito(product)}}>Quitar Producto</Button>
    </Box>
  );
};

export default ItemCount;
