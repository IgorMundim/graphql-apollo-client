import { apolloClient } from '@/graphql/apollo/client';
import { cartVarFn } from '@/graphql/apollo/reactiveVar/cart';
import { loginFormVar } from '@/graphql/apollo/reactiveVar/user';
import { GQL_CART_ADD, GQL_CART_UPDATE } from '@/graphql/mutations/cart';
import { Product } from '@/models/Product';

export const addItem = async (altProduct: Product) => {
  const allCart = cartVarFn();
  const productIsAlreadyInCard = allCart.some((product: Product) => product.name === altProduct.name);
  if (productIsAlreadyInCard) {
    const filteredCart = allCart.map((product: Product) =>
      String(product.name) === String(altProduct.name) ? { ...product, quantity: product.quantity + 1 } : product
    );
    const cartBase = allCart.filter((product: Product) => String(product.name) === String(altProduct.name));

    if (loginFormVar.get().firstName) {
      console.log(cartBase[0].id, cartBase[0].quantity);
      await apolloClient.mutate({
        mutation: GQL_CART_UPDATE,
        variables: {
          data: {
            id: cartBase[0].id,
            quantity: altProduct.quantity,
          },
        },
      });
    }
    cartVarFn(filteredCart);
    return;
  }
  if (loginFormVar.get().firstName) {
    const data = await apolloClient.mutate({
      mutation: GQL_CART_ADD,
      variables: {
        data: {
          name: altProduct.name,
          imageUrl: altProduct.imageUrl,
          price: altProduct.price,
          quantity: altProduct.quantity,
          product: altProduct.id,
          user: loginFormVar.get().id,
        },
      },
    });
    cartVarFn(data.data.addItemCart);
    return;
  }
  cartVarFn(allCart.concat(altProduct));
};
