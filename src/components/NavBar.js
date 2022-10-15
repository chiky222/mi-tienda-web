import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
        <header className='header-container'>
            <nav className='nav-header'>
                <ul className='menu-nav'>
                    <li className='item-menu'><a href="">Home</a></li>
                    <li className='item-menu'><a href="">Tienda</a></li>
                    <img className='img-menu' src='tiendAR.svg' alt='logo' />
                    <li className='item-menu'><a href="">Nosotros</a></li>
                    <li className='item-menu'><a href="">Contacto</a></li>
                    <a href=''><CartWidget /></a>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default NavBar;