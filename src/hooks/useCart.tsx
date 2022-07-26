import { createContext, useContext, useState } from 'react';

interface CartContextProps {
  products: string[];
  addProduct: (product: string) => void;
}

const CartContext = createContext<CartContextProps>({
  products: [],
  addProduct: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<string[]>([]);

  const addProduct = (product: string) => {
    setProducts([...products, product]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
