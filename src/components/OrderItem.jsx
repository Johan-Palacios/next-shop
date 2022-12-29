import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import icon_close from '@images/icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = (props) => {
  const { indexValue, product } = props;
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (index) => {
    removeFromCart(index);
  };
  return (
    <div className={styles.OrderItem}>
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={icon_close} alt="close" onClick={() => handleRemove(indexValue)} className="OrderItem__close" />
    </div>
  );
};

export default OrderItem;
