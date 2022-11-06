import React from 'react';
import {SlSocialInstagram, SlSocialLinkedin, SlSocialGithub, SlSocialTwitter} from 'react-icons/sl';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='navbar-footer'>
      <div className="social-ico">
        <a href='https://www.instagram.com/cristian_ferrer/' target="_blank" rel="noreferrer"><SlSocialInstagram /></a>
        <a href='https://www.linkedin.com/in/cristian-ferrer-74278a32/' target="_blank" rel="noreferrer"><SlSocialLinkedin /></a>
        <a href='https://github.com/chiky222' target="_blank" rel="noreferrer"><SlSocialGithub /></a>
        <a href='https://twitter.com/ChikyF22' target="_blank" rel="noreferrer"><SlSocialTwitter /></a>
      </div>
      <ul>
        <NavLink to='/' ><li>Home</li></NavLink>
        <a href='https://opensea.io/es/collection/messi-hollywood' target="_blank" rel="noreferrer">Opensea</a>
        <NavLink to='/contact' ><li>Contacto</li></NavLink>
      </ul>
      <p>
        <b>eNeFeTe</b> - All Rights Reserved ©<br></br>Created by Chiky
      </p>
    </footer>
  )
};

export default Footer;