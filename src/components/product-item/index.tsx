import { BsCartPlus } from 'react-icons/bs';

import { cartVar } from '@/graphql/apollo/reactiveVar/cart';

import CustomButton from '../custom-button/index';
import * as Styles from './styles';
interface ProductItemProps {
  product: {
    id: string;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
  };
}
const ProductItem = ({ product }: ProductItemProps) => {
  const handleProductClick = async () => {
    cartVar.addItem(product);
  };
  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton onClick={handleProductClick} startIcon={<BsCartPlus />}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
