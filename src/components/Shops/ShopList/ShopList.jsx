import { ShopItem } from '../ShopItem/ShopItem';
import style from './ShopList.module.scss';

export const ShopList = ({ shops, onChangeCurrentShop }) => {
  return (
    <div className={style.list}>
      {shops.map(shop => (
        <ShopItem
          key={shop.id}
          shop={shop}
          onChangeCurrentShop={onChangeCurrentShop}
        />
      ))}
    </div>
  );
};
