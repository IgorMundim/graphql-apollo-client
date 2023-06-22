import { cartVarFn } from '@/graphql/apollo/reactiveVar/cart';

export const getQuantity = () => {
  return cartVarFn().reduce((result) => {
    return result + 1;
  }, 0);
};
