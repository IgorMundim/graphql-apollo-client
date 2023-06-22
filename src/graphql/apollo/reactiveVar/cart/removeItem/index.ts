import { cartVarFn } from '@/graphql/apollo/reactiveVar/cart';
import { Product } from '@/models/Product';

export const removeItem = (id: string) => {
  const allCart = cartVarFn();
  const filteredCart = allCart.filter((product: Product) => product.id !== id);
  cartVarFn(filteredCart);
};
