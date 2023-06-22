import { gql } from '@apollo/client';

export const GQL_PRODUCTS = gql`
  query GET_CART($userId: ID!) {
    cart(user_id: $userId) {
      id
      imageUrl
      name
      price
      quantity
    }
  }
`;
