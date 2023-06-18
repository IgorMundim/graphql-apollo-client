import { useSelector } from 'react-redux';
import { AnyAction } from 'redux';

import { selectProductsTotalPrice } from '@/redux/cart/cart.selector';
import { ProductProps } from '@/redux/cart/slice';

import CartItem from '../cart-item';
import * as Styles from './styles';
interface CartProps {
  isVisible: boolean;
  setIsVisible?: any;
}

const Cart = ({ isVisible, setIsVisible }: CartProps) => {
  const productsTotalPrice = useSelector(selectProductsTotalPrice);
  const handleEscapeAreaClick = () => setIsVisible(false);
  const { products } = useSelector((rootReducer: AnyAction) => rootReducer.cartReducer);
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map((item: ProductProps) => item.id && <CartItem key={item.id} product={item} />)}
        <Styles.CartTotal>Total: ${productsTotalPrice}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
