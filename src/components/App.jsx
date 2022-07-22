import { useState, useEffect } from 'react';
import * as API from '../service/fetchApi';
import { ShopList } from './Shops/ShopList/ShopList';
import { ProductList } from './Shops/ProductList/ProductList';
import style from './App.module.scss';

export const App = () => {
  const [shops, setShops] = useState([]);
  const [currentShop, setCurrentShop] = useState(null);

  useEffect(() => {
    API.getShops()
      .then(dataShops => {
        setShops(dataShops);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleChangeCurrentShop = id => {
    // if (currentShop.id === id) {
    //   return;
    // }

    setCurrentShop(
      shops.filter(shop => shop.id === id).reduce((acc, item) => item, {})
    );
  };

  return (
    <div className={style.container}>
      <ShopList shops={shops} onChangeCurrentShop={handleChangeCurrentShop} />

      {currentShop === null ? (
        <div>Select shop</div>
      ) : (
        <ProductList products={currentShop.products} />
      )}
    </div>
  );
};
