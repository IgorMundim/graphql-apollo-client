import { cartVarFn } from '@/graphql/apollo/reactiveVar/cart';
import { Product } from '@/models/Product';

export const increaseItem = (altProduct: Product) => {
  const allCart = cartVarFn();
  const filteredCart = allCart.map((product: Product) =>
    product.id === altProduct.id ? { ...product, quantity: product.quantity + 1 } : product
  );
  cartVarFn(filteredCart);
};
