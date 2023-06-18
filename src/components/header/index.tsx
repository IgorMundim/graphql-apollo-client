import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';

import Cart from '@/components/cart';
import { selectProductsCount } from '@/redux/cart/cart.selector';
import { login, logout } from '@/redux/user/slice';

import * as Styles from './styles';

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector((rootReducer: AnyAction) => rootReducer.userReducer);
  const dispatch = useDispatch();
  const productsCount = useSelector(selectProductsCount);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(login({ firstName: 'User', lastName: 'Account' }));
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>{currentUser.firstName} - Logout</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>Card ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
