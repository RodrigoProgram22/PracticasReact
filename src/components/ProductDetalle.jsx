import { useEffect, useState } from "react";
import { getProductById } from "../services/products.service";
import { useParams } from "react-router-dom";
import {
  Flex,
  Spinner,
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
const ProductoDetalle = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((item) => setProduct(item.data));
  }, [id]);

  return (
    <div>
      {product ? (
        <Flex justifyContent={"center"}>
          <Box
            role={"group"}
            p={3}
            maxW={"500px"}
            w={"full"}
            margin={"40px"}
            bg={("white")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Flex rounded={"lg"} justifyContent={"center"}>
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"content"}
                src={product.thumbnail}
                alt="#"
              />
            </Flex>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.1000"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                {product.title}
              </Text>
              <Heading
                fontSize={"1xl"}
                fontFamily={"body"}
                fontWeight={500}
                color={"gray.500"}
              >
                {product.description}
              </Heading>
                   <Text fontWeight={800} fontSize={"xl"}>
                  Categoria : {product.category}
                </Text>
              <Stack direction={"row"} align={"center"}>
                 <Text fontWeight={800} fontSize={"xl"}>
                  Stock :{product.stock}
                </Text>
                <Text fontWeight={800} fontSize={"xl"}>
                  ${product.price}
                </Text>
              </Stack>
              {product.reviews.map((reviews,index) => (
                <Container border={"1px red solid"} p={2} borderRadius={"2xl"} key={index}>  
                <h2>Review {index + 1}</h2>
                
                    <p>
                        Nombre : {reviews.reviewerName}
                    </p>
                    <p>
                        Comentario : {reviews.comment}
                    </p>
                      <p fontWeight={800} fontSize={"xl"}>
                        Fecha : {reviews.date}
                    </p>
                </Container>
              ))}
            </Stack>
          </Box>
        </Flex>
      ) : (
        <Flex alignItems="center" justifyContent="center" marginTop={"100px"}>
          <Spinner color="red.500" size="xl" />
        </Flex>
      )}
    </div>
  );
};

export default ProductoDetalle;
