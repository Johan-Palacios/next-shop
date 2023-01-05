import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';
import styles from '@styles/Header.module.scss';
import logo_yard_sale from '@images/logos/logo_yard_sale.svg';
import icon_menu from '@images/icons/icon_menu.svg';
import icon_shopping_cart from '@images/icons/icon_shopping_cart.svg';
import MenuMobile from '@components/MenuMobile';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const { state } = useContext(AppContext);
  const stateLongNumber = (stateLength) => {
    if (stateLength > 0 && stateLength <= 9) {
      return <div>{stateLength}</div>;
    }
    if (stateLength > 9) {
      return <div>+9</div>;
    }
  };
  return (
    <nav className={styles.Nav}>
      <div className={styles.iconContainer}>
        <Image
          width={30}
          height={30}
          src={icon_menu}
          alt="menu"
          className={styles.menu}
          onClick={() => {
            setToggleMobileMenu(!toggleMobileMenu);
            if (toggleOrders === true) {
              setToggleOrders(!toggleOrders);
            }
          }}
        />
      </div>
      <div className={styles['navbar-left']}>
        <div className={styles.iconContainer}>
          <Link href="/">
            <Image src={logo_yard_sale} alt="logo" className={styles['nav-logo']} width={30} height={30} />
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li
            className={styles['navbar-email']}
            onClick={() => {
              setToggle(!toggle);
              if (toggleOrders === true) {
                setToggleOrders(!toggleOrders);
              }
            }}
          >
            platzi@example.com
          </li>
          <li
            className={styles['navbar-shopping-cart']}
            onClick={() => {
              if (toggle === true) {
                setToggle(!toggle);
              }
              if (toggleMobileMenu === true) {
                setToggleMobileMenu(!toggleMobileMenu);
              }
              setToggleOrders(!toggleOrders);
            }}
          >
            <Image src={icon_shopping_cart} alt="shopping cart" />
            {stateLongNumber(state?.cart.length)}
          </li>
        </ul>
      </div>
      {toggle && <Menu></Menu>}
      {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
      {toggleMobileMenu && <MenuMobile></MenuMobile>}
    </nav>
  );
};

export default Header;
