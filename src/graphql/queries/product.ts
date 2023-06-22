import { gql } from '@apollo/client';

export const GQL_PRODUCTS = gql`
  query GQL_PRODUCTS($data: PaginateInput!) {
    products(data: $data) {
      id
      imageUrl
      name
      price
      quantity
    }
  }
`;
