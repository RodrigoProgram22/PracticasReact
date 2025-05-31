import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCart((carritoAnterior) => {
      const productoExistente = carritoAnterior.find(
        (item) => item.id === producto.id
      );
      if (productoExistente) {
        const nuevoCarrito = carritoAnterior.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return nuevoCarrito;
      }
      const nuevoCarrito = [...carritoAnterior, { ...producto, quantity: 1 }];
      return nuevoCarrito;
    });
  };

  const quitarDelCarrito = (producto) => {
    setCart((carritoAnterior) => {
      const productoExistente = carritoAnterior.find(
        (item) => item.id === producto.id
      );
      if (productoExistente) {
        if (productoExistente.quantity > 1) {
          return carritoAnterior.map((item) =>
            item.id === producto.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          return carritoAnterior.filter((item) => item.id !== producto.id);
        }
      }
    });
  };
  return (
    <CartContext.Provider value={{ cart, agregarAlCarrito, quitarDelCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
