import { cartVar } from '@/graphql/apollo/reactiveVar/cart';
import { Product } from '@/models/Product';

import CartItem from '../cart-item';
import * as Styles from './styles';
interface CartProps {
  isVisible: boolean;
  setIsVisible?: any;
}

const Cart = ({ isVisible, setIsVisible }: CartProps) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {cartVar.get().map((item: Product) => item.id && <CartItem key={item.id} product={item} />)}
        <Styles.CartTotal>Total: ${cartVar.getTotalPrice()}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
