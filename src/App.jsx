import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Perfil from "./components/Perfil";
import Products from "./components/Products";
import ProductoDetalle from "./components/ProductDetalle";
const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/productos" element={<Products />} />
            <Route path="/producto/:id" element={<ProductoDetalle />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
