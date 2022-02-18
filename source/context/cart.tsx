import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {CartItem, Product} from '../types/entities';
import {findIndex, sumBy} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {sumItemsCart} from '../services/CartRepository';

const CartContext = createContext();

export default function CartProvider({children}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);

  const loadCartCache = useCallback(async () => {
    try {
      const cartCache = await AsyncStorage.getItem('@MEEP-CART');
      if (cartCache) {
        setCart(JSON.parse(cartCache));
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    loadCartCache().then();
  }, [loadCartCache]);

  useEffect(() => {
    setTotalValue(sumItemsCart(cart));
    AsyncStorage.setItem('@MEEP-CART', JSON.stringify(cart)).then();
  }, [cart]);

  const clearCart = async () => {
    await AsyncStorage.clear();
    setCart([]);
  };

  const removeProduct = async (productId: number) => {};

  const addProduct = (
    product: Product,
    quantity: number,
    observation: string,
  ) => {
    let newCart = cart;
    const index = findIndex(newCart, {product: product});
    if (quantity === 0 && index > -1) {
      newCart.splice(index, 1);
    } else {
      if (index > -1) {
        newCart[index].quantity = quantity;
        newCart[index].observation = observation;
      } else {
        newCart.push({
          product,
          quantity,
          observation,
        });
      }
    }

    setCart([...newCart]);
  };

  const store = {
    removeProduct,
    addProduct,
    cart,
    totalValue,
    clearCart,
  };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  const {removeProduct, addProduct, cart, totalValue, clearCart} = context;

  return {
    removeProduct,
    addProduct,
    cart,
    totalValue,
    clearCart,
  };
}
