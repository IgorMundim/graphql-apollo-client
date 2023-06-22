import { gql } from '@apollo/client';

export const GQL_FRAGMENT_CART = gql`
  fragment cart on CartItem {
    id
    imageUrl
    name
    price
    quantity
  }
`;
