import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import icon_arrow from '@images/icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = ({ setToggleOrders, toggleOrders }) => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (amount, currentValue) => amount + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image
          src={icon_arrow}
          alt="arrow"
          onClick={() => {
            setToggleOrders(!toggleOrders);
          }}
        />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {state.cart.map((product, index) => (
          <OrderItem indexValue={index} key={index} product={product} />
        ))}

        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className={styles['primary-button']}>
          <Link href="/checkout">Checkout</Link>
        </button>
      </div>
    </aside>
  );
};

export default MyOrder;
