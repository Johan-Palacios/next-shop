import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import add_cart from '@images/icons/bt_add_to_cart.svg';
import added_cart from '@images/icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product} ) => {
  const { addToCart, state } = useContext(AppContext);
  const itsProductAdded = () => state.cart.some((item) => item.id === product.id);
  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={product?.images[0]} alt={product?.title} width={300} height={300} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>{itsProductAdded() ? <Image src={added_cart} alt="Added to cart" /> : <Image src={add_cart} alt="Add to cart" />}</figure>
      </div>
    </div>
  );
};

export default ProductItem;
