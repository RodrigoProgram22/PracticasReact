import { React, useEffect, useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { getAllProducts } from "./services/products.service";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar.jsx";
import { SimpleGrid } from "@chakra-ui/react";
const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data.products);
    });
  }, []);
  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <SimpleGrid columns={3} spacing={10}>
        {products.map((product) => {
          return (
            <ItemCard
              key={product.id}
              image={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          );
        })}
      </SimpleGrid>
    </ChakraProvider>
  );
};
export default App;
