import { gql } from '@apollo/client';

import { GQL_FRAGMENT_CART } from '@/graphql/fragment/cart';

export const GQL_LOGIN = gql`
  ${GQL_FRAGMENT_CART}
  mutation LOGIN($userName: String!, $password: String!) {
    login(data: { userName: $userName, password: $password }) {
      id
      firstName
      lastName
      userName
      cart {
        ...cart
      }
    }
  }
`;

export const GQL_LOGOUT = gql`
  mutation LOGOUT($userName: String!) {
    logout(userName: $userName)
  }
`;
