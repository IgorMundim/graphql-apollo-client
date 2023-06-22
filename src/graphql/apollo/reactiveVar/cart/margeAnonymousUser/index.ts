import { Product } from '@/models/Product';

import { addItem } from '../addProduct';

function margeCart(newData: Product[]) {
  for (let i = 0; i < newData.length; ++i) {
    addItem(newData[i]);
  }
}
export const margeAnonymousCart = (products: Product[]) => {
  margeCart(products);
};
