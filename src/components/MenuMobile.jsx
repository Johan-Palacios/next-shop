import React from 'react';
import Image from 'next/image';
import styles from '@styles/MenuMobile.module.scss';
import close from '@images/icons/icon_close.png';
import Link from 'next/link';

function MenuMobile({ props }) {
  return (
    <div className={styles.MenuMobile}>
      <Image src={close} alt="close menu" className={styles.close} onClick={props} />
      <div>
        <ul>
          <li>
            <Link href="/">CATEGORIES</Link>
          </li>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Cloth</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furniture</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/">My orders</Link>
          </li>
          <li>
            <Link href="/">My Account</Link>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <Link href="/" className="email">
            platzi@example.com
          </Link>
        </li>
        <li>
          <Link href="/" className="sign-out">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuMobile;
