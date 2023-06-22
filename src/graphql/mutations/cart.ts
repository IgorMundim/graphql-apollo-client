import { gql } from '@apollo/client';

export const GQL_CART_UPDATE = gql`
  mutation UPDATE($data: UpdateCartInput!) {
    updateItemCart(data: $data)
  }
`;

export const GQL_CART_DELETE = gql`
  mutation DELETE($id: ID!) {
    deleteItemCart(id: $id)
  }
`;

export const GQL_CART_ADD = gql`
  mutation ADD($data: AddCartInput!) {
    addItemCart(data: $data) {
      id
      imageUrl
      name
      price
      quantity
    }
  }
`;
