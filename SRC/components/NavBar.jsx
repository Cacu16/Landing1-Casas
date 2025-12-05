import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🧉 Yerba Mate Ciudad Evita</div>

      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Yerbas</a></li>
        <li><a href="#">Accesorios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;

