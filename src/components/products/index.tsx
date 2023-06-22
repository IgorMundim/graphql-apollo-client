import { useQuery } from '@apollo/client';

import ProductItem from '@/components/product-item';
import { GQL_PRODUCTS } from '@/graphql/queries/product';
import { Product } from '@/models/Product';

import * as Styles from './styles';

const Products = () => {
  const { data, error, loading } = useQuery(GQL_PRODUCTS, {
    variables: { data: { currentPage: 1, perPage: 8 } },
  });
  if (error) return `Error! ${error.message}`;
  if (loading) return 'Loading...';

  return (
    <Styles.Container>
      {data.products.map((product: Product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Styles.Container>
  );
};

export default Products;
