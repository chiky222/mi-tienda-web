import React from 'react';
import {SlSocialInstagram, SlSocialLinkedin, SlSocialGithub, SlSocialTwitter} from 'react-icons/sl';

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
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Tienda</a></li>
        <li><a href='#'>Nosotros</a></li>
        <li><a href='#'>Contacto</a></li>
      </ul>
      <p>
        <b>TiendAR</b> - All Rights Reserved ©<br></br>Created by Chiky
      </p>
    </footer>
  )
};

export default Footer;