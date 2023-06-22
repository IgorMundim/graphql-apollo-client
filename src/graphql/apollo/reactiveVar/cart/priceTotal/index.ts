import { cartVarFn } from '@/graphql/apollo/reactiveVar/cart';

export const getTotalPrice = () => {
  return cartVarFn().reduce((result, cart) => {
    return result + cart.quantity * cart.price;
  }, 0);
};
