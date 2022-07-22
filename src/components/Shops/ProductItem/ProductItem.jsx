import style from './ProductItem.module.scss';

export const ProductItem = ({ product }) => {
  return (
    <div className={style.item}>
      <img
        src={product.imgUrl}
        alt={product.productName}
        className={style.img}
      />
      <div className={style.info}>
        <h3>{product.productName}</h3>
        <button className={style.button}>Add cart</button>
      </div>
    </div>
  );
};
