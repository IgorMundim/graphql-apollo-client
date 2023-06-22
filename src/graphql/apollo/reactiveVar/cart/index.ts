import { makeVar, useReactiveVar } from '@apollo/client';

import { addItem } from '@/graphql/apollo/reactiveVar/cart/addProduct';
import { decreaseItem } from '@/graphql/apollo/reactiveVar/cart/decreaseItem';
import { increaseItem } from '@/graphql/apollo/reactiveVar/cart/increaseItem';
import { margeAnonymousCart } from '@/graphql/apollo/reactiveVar/cart/margeAnonymousUser';
import { removeItem } from '@/graphql/apollo/reactiveVar/cart/removeItem';

import { Product } from '../../../../models/Product';
import { getTotalPrice } from './priceTotal';
import { getQuantity } from './quantity';
const cartInitialValue: Product[] = [];

export const cartVarFn = makeVar(cartInitialValue);

const useCartVar = () => {
  return useReactiveVar(cartVarFn);
};

export const cartVar = {
  set: (p: Product[]) => cartVarFn(p),
  get: () => cartVarFn(),
  getTotalPrice,
  getQuantity,
  reset: () => cartVarFn(cartInitialValue),
  addItem: addItem,
  removeItem: removeItem,
  increaseItem: increaseItem,
  decreaseItem: decreaseItem,
  margeAnonymousCart: margeAnonymousCart,
  use: useCartVar,
};

// import { makeVar, useReactiveVar } from '@apollo/client';

// import { Product } from '../../../../models/Product';
// const cartInitialValue: Product[] = [];

// export const cartVarFn = makeVar(cartInitialValue);

// const useCartVar = () => {
//   return useReactiveVar(cartVarFn);
// };

// const getTotalPrice = () => {
//   return cartVarFn().reduce((result, cart) => {
//     return result + cart.quantity * cart.price;
//   }, 0);
// };

// const getQuantity = () => {
//   return cartVarFn().reduce((result) => {
//     return result + 1;
//   }, 0);
// };

// export const cartVar = {
//   set: (p: Product[]) => cartVarFn(p),
//   get: () => cartVarFn(),
//   getTotalPrice,
//   getQuantity,
//   reset: () => cartVarFn(cartInitialValue),
//   use: useCartVar,
// };
