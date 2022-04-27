import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const handleBar = () => {
    const navburger = document.querySelector('.navbar__phone');
    navburger.classList.toggle('navbar__phone--active');
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="../assets/components/logo.png" alt="logo" />
      </div>
      <div className="navbar__links">
        <NavLink to="#" className="navbar__link navbar__link--active">
          Inicio
        </NavLink>
        <NavLink to="#" className="navbar__link">
          Operaciones
        </NavLink>
        <NavLink to="#" className="navbar__link">
          Ajustes
        </NavLink>
        <NavLink to="#" className="navbar__profile">
          <img src="../assets/components/user.webp" alt="profile" />
        </NavLink>
        <button className="navbar__button" onClick={handleBar}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className="navbar__phone">
        <NavLink to="#" className="navbar__profile-phone">
          <img src="../assets/components/user.webp" alt="profile" />
        </NavLink>
        <NavLink to="#" className="navbar__link-phone navbar__link--active">
          Inicio
        </NavLink>
        <NavLink to="#" className="navbar__link-phone">
          Operaciones
        </NavLink>
        <NavLink to="#" className="navbar__link-phone">
          Ajustes
        </NavLink>
      </div>
    </nav>
  );
};
