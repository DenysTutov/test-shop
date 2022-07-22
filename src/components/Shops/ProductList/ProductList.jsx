import { ProductItem } from '../ProductItem/ProductItem';
import style from './ProductList.module.scss';

export const ProductList = ({ products }) => {
  return (
    <div className={style.container}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
