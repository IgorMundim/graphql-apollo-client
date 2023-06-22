import { useMutation } from '@apollo/client';
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { cartVar } from '@/graphql/apollo/reactiveVar/cart';
import { loginFormVar } from '@/graphql/apollo/reactiveVar/user';
import { GQL_CART_DELETE, GQL_CART_UPDATE } from '@/graphql/mutations/cart';

import * as Styles from './styles';
interface CartItemProps {
  product: {
    id: string;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
  };
}
const CartItem = ({ product }: CartItemProps) => {
  const [updateItemCart] = useMutation(GQL_CART_UPDATE);
  const [deleteItemCart] = useMutation(GQL_CART_DELETE);
  const handleRemoveClick = async () => {
    if (loginFormVar.get().firstName) await deleteItemCart({ variables: { id: product.id } });
    cartVar.removeItem(product.id);
  };

  const handleIncreaseClick = async () => {
    if (loginFormVar.get().firstName) {
      const variables = { data: { id: product.id, quantity: product.quantity + 1 } };
      await updateItemCart({ variables });
    }
    cartVar.increaseItem(product);
  };

  const handleDecreaseClick = async () => {
    if (loginFormVar.get().firstName) {
      const variables = { data: { id: product.id, quantity: product.quantity - 1 } };
      await updateItemCart({ variables });
    }
    cartVar.decreaseItem(product);
  };

  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.imageUrl} />

      <Styles.CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price * product.quantity}</p>

        <Styles.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            id="1"
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            id="2"
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>

      <Styles.RemoveButton onClick={handleRemoveClick} aria-label={`Remove ${product.name}`}>
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  );
};

export default CartItem;
