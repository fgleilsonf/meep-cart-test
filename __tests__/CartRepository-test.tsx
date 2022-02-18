/**
 * @format
 */

import 'react-native';
import { sumItemsCart } from "../source/services/CartRepository";
import { CartItem } from "../source/types/entities";

it("should be total cart 19", () => {
  const product1: CartItem = {
    product: {
      id: 1,
      name: 'product 1',
      price: 5,
    },
    quantity: 2,
  };

  const product2: CartItem = {
    product: {
      id: 2,
      name: 'product 2',
      price: 3,
    },
    quantity: 3,
  };

  expect(sumItemsCart([product1, product2])).toBe(19);
});
