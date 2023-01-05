import React from 'react';
import '@styles/SendEmail.scss';
import logo_yard_sale from '@images/logos/logo_yard_sale.svg';
import email from '@images/logos/email.svg';
import Image from 'next/image';
import Link from 'next/link';

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <Image src={logo_yard_sale} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="email-image">
          <Image src={email} alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Did not receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
