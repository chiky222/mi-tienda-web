import React from 'react';
import CartWidget from './CartWidget';
import {GiHamburgerMenu} from 'react-icons/gi';
import {NavLink} from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {

  const [show, setHide] = useState (true);

  const hider = () => {
    if (show) {
      setHide(false);
    } else {
      setHide(true);
    }
  }

  return (
    <>
        <header className='header-container'>
            <nav className='nav-header'>
                <button className='hamb-ico' onClick={hider} ><GiHamburgerMenu /></button>
                <ul className={show ? 'menu-nav' : 'menu-nav hide'}>
                    <NavLink className="links" to="/" ><img className='img-menu' src='TiendAR.png' alt='logo'></img></NavLink>
                    <li className='item-menu'><NavLink className="links" to="/">Todas</NavLink></li>
                    <li className='item-menu'><NavLink className="links" to="/category/Oro">Oro</NavLink></li>
                    <li className='item-menu'><NavLink className="links" to="/category/Plata">Plata</NavLink></li>
                    <li className='item-menu'><NavLink className="links" to="/category/Bronce">Bronce</NavLink></li>
                    <NavLink className="links" to="/cart"><CartWidget /></NavLink>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default NavBar;