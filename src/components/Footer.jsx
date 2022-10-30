import React from 'react';
import {SlSocialInstagram, SlSocialLinkedin, SlSocialGithub, SlSocialTwitter} from 'react-icons/sl';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='navbar-footer'>
      <div className="social-ico">
        <a href='https://www.instagram.com/cristian_ferrer/'><SlSocialInstagram /></a>
        <a href='https://www.linkedin.com/in/cristian-ferrer-74278a32/'><SlSocialLinkedin /></a>
        <a href='https://github.com/chiky222'><SlSocialGithub /></a>
        <a href='https://twitter.com/ChikyF22'><SlSocialTwitter /></a>
      </div>
      <ul>
        <NavLink to='/' ><li>Home</li></NavLink>
        <a href='https://opensea.io/es/collection/messi-hollywood'>Opensea</a>
        <NavLink to='/contact' ><li>Contacto</li></NavLink>
      </ul>
      <p>
        <b>eNeFeTe</b> - All Rights Reserved ©<br></br>Created by Chiky
      </p>
    </footer>
  )
};

export default Footer;