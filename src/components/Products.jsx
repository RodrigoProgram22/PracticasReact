import { useEffect, useState } from "react";
import { Flex, Wrap, Spinner } from "@chakra-ui/react";
import ItemCard from "../components/ItemCard";
import { getAllProducts } from "../services/products.service";

const Products = () => {
   const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(true);
     useEffect(() => {
       getAllProducts()
         .then((res) => {
           setProducts(res.data.products);
         })
         .finally(() => {
           setLoading(false);
         });
     }, []);
   
     return loading ? (
       <Flex alignItems="center" justifyContent="center" marginTop={"100px"}>
         <Spinner color="red.500" size="xl" />
       </Flex>
     ) : (
       <Wrap justify={"center"} spacing="25px" marginTop={"20px"}>
         {products.map((product) => (
           <ItemCard
             key={product.id}
             id={product.id}
             image={product.thumbnail}
             title={product.title}
             description={product.description}
             price={product.price}
             discountPercentage={product.discountPercentage}
           />
         ))}
       </Wrap>
     );
}
export default Products;