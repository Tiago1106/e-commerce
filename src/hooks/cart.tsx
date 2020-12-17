import React, { createContext, useState, useContext } from 'react';

interface Cart {
  addToCart(): void;
  cart: number;
}

const CartContext = createContext<Cart>({} as Cart);

const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<number>(0);

  const addToCart = (): void => {
    setCart(cart + 1);
  };

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

function useCart(): Cart {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
