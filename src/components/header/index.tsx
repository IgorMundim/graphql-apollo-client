import { useMutation } from '@apollo/client';
import { useState } from 'react';

import Cart from '@/components/cart';
import { cartVar } from '@/graphql/apollo/reactiveVar/cart';
import { GQL_LOGIN, GQL_LOGOUT } from '@/graphql/mutations/auth';

import { loginFormVar } from '../../graphql/apollo/reactiveVar/user';
import * as Styles from './styles';

function Header() {
  const [login] = useMutation(GQL_LOGIN);
  const [logout] = useMutation(GQL_LOGOUT);

  loginFormVar.use();
  cartVar.use();

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = async (e: any) => {
    e.preventDefault();
    const variables = {
      userName: 'igor.mundim',
      password: '@Password1',
    };
    const result = await login({ variables });
    const anonymousCart = cartVar.get();
    loginFormVar.set({ ...result.data.login });
    cartVar.set(result.data.login.cart);
    cartVar.margeAnonymousCart(anonymousCart);
  };

  const handleLogoutClick = async () => {
    const variables = {
      userName: 'igor.mundim',
    };
    await logout({ variables });
    loginFormVar.reset();
    cartVar.reset();
  };

  return (
    <Styles.Container>
      <Styles.Logo>Client Apollo Shopping</Styles.Logo>
      <Styles.Buttons>
        {loginFormVar.get()?.firstName ? (
          <div onClick={handleLogoutClick}>{loginFormVar.get()?.firstName} - Logout</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>Card ({cartVar.getQuantity()})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
