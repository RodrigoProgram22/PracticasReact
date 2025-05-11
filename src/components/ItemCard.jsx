import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ItemCard = ({
  id,
  image,
  title,
  description,
  price,
  discountPercentage,
}) => {
  const originalPrice = price / (1 - discountPercentage / 100);

  return (
    <Box
      role={"group"}
      p={3}
      maxW={"330px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
      border={"2px solid rgb(202, 91, 91)"}
    >
      <Box rounded={"lg"}>
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"content"}
          src={image}
          alt="#"
        />
      </Box>
      <Stack pt={10} align={"center"}>
        <Text color={"gray.1000"} fontSize={"sm"} textTransform={"uppercase"}>
          {title}
        </Text>
        <Heading
          fontSize={"1xl"}
          fontFamily={"body"}
          fontWeight={500}
          color={"gray.500"}
        >
          {description}
        </Heading>
        <Stack direction={"row"} align={"center"}>
          <Link to={`/Producto/${id}`}>
            <Button colorScheme="red">Ver Producto</Button>
          </Link>
          <Text fontWeight={800} fontSize={"xl"}>
            ${price}
          </Text>
          <Text textDecoration={"line-through"} color={"gray.600"}>
            ${originalPrice.toFixed(2)}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};
export default ItemCard;
