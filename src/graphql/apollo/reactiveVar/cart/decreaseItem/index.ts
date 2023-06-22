import { cartVarFn } from '@/graphql/apollo/reactiveVar/cart';
import { Product } from '@/models/Product';

export const decreaseItem = (altProduct: Product) => {
  const allCart = cartVarFn();
  const filteredCart = allCart
    .map((product: Product) =>
      product.id === altProduct.id ? { ...product, quantity: product.quantity - 1 } : product
    )
    .filter((product: Product) => product.quantity > 0);
  cartVarFn(filteredCart);
};
