import { createSlice } from '@reduxjs/toolkit';
export interface ProductProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}
interface CartProduct {
  products: ProductProps[];
}
const initialState = {
  products: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state: CartProduct, action) => {
      const productIsAlreadyInCard = state.products.some((product: ProductProps) => product.id === action.payload.id);
      if (productIsAlreadyInCard) {
        state.products = state.products.map((product: ProductProps) =>
          product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product
        );
        return;
      }
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },
    increaseProductQuantity: (state: CartProduct, action) => {
      state.products = state.products.map((product: ProductProps) =>
        product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product
      );
    },
    decreaseProductQuantity: (state: CartProduct, action) => {
      state.products = state.products
        .map((product: ProductProps) =>
          product.id === action.payload.id ? { ...product, quantity: product.quantity - 1 } : product
        )
        .filter((product: ProductProps) => product.quantity > 0);
    },
    removeProduct: (state: CartProduct, action) => {
      state.products = state.products.filter((product: ProductProps) => product.id !== action.payload.id);
    },
  },
});

export const { addProduct, increaseProductQuantity, decreaseProductQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
