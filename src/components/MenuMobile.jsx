import React from 'react';
import Image from 'next/image';
import styles from '@styles/MenuMobile.module.scss';
import close from '@images/icons/icon_close.png';

function MenuMobile({ props }) {
  return (
    <div className={styles.MenuMobile}>
      <Image src={close} alt="close menu" className={styles.close} onClick={props} />
      <div>
        <ul>
          <li>
            <a href="/">CATEGORIES</a>
          </li>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Cloth</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furniture</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">My orders</a>
          </li>
          <li>
            <a href="/">My Account</a>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <a href="/" className="email">
            platzi@example.com
          </a>
        </li>
        <li>
          <a href="/" className="sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuMobile;
