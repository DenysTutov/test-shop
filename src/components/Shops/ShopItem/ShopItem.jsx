import style from './ShopItem.module.scss';

export const ShopItem = ({ shop, onChangeCurrentShop }) => {
  return (
    <div className={style.item} onClick={() => onChangeCurrentShop(shop.id)}>
      {shop.shopName}
    </div>
  );
};
