import React, { useContext } from 'react';
import Image from 'next/image';
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
        <Image src={product?.images[0]} alt={product?.title} width={100} height={100} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={icon_close} className={styles["close-icon"]} alt="close" onClick={() => handleRemove(indexValue)} className={styles['OrderItem__close']} />
    </div>
  );
};

export default OrderItem;
