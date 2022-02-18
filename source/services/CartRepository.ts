import {sumBy} from 'lodash';
import {CartItem} from '../types/entities';

const sumItemsCart = (items: CartItem[]): number => {
  const total = sumBy(items, (item: CartItem) => {
    return item.product.price * item.quantity;
  });

  return total;
};

export {sumItemsCart};
