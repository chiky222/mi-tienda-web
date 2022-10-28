import React from 'react';
import CartWidget from './CartWidget';
import {GiHamburgerMenu} from 'react-icons/gi';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
        <header className='header-container'>
            <nav className='nav-header'>
                <a className='hamb-ico' ><GiHamburgerMenu /></a>
                <ul className='menu-nav hide'>
                    <li className='item-menu'><NavLink className="links" to="/category/Oro">Oro</NavLink></li>
                    <li className='item-menu'><NavLink className="links" to="/category/Plata">Plata</NavLink></li>
                    <NavLink className="links" to="/" ><img className='img-menu' src='tiendAR.svg' alt='logo'></img></NavLink>
                    <li className='item-menu'><NavLink className="links" to="/category/Bronce">Bronce</NavLink></li>
                    <li className='item-menu'><NavLink className="links" to="/">Todas</NavLink></li>
                    <NavLink className="links" to="/cart"><CartWidget /></NavLink>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default NavBar; 