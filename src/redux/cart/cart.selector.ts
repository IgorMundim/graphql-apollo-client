import { AnyAction } from 'redux';

import { ProductProps } from '@/redux/cart/slice';

export const selectProductsCount = (rootReducer: AnyAction) => {
  return rootReducer.cartReducer.products.reduce((acc: number, curr: ProductProps) => acc + curr.quantity, 0);
};

export const selectProductsTotalPrice = (rootReducer: AnyAction) => {
  return rootReducer.cartReducer.products.reduce(
    (acc: number, curr: ProductProps) => acc + curr.price * curr.quantity,
    0
  );
};
