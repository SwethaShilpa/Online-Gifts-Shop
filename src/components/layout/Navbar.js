import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {

  const location = useLocation();

  return (
    <>
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <Link className="navbar-brand" to="/"> <span> Giftos </span> </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class=""></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className={location.pathname.includes('/') ? "nav-item active" : "nav-item"}>
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className={location.pathname.includes('/shop') ? "nav-item active" : "nav-item"}>
              <NavLink className="nav-link" to="/shop">Shop</NavLink>
            </li>
            <li className={location.pathname.includes('/about') ? "nav-item active" : "nav-item"}>
              <NavLink className="nav-link" to="/about">Why Us</NavLink>
            </li>
            <li className={location.pathname.includes('/testimonial') ? "nav-item active" : "nav-item"}>
              <NavLink className="nav-link" to="/testimonial">Testimonial</NavLink>
            </li>
            <li className={location.pathname.includes('/contactUs') ? "nav-item active" : "nav-item"}>
              <NavLink className="nav-link" to="/contactUs">Contact Us</NavLink>
            </li>
            <li className={location.pathname.includes('/login') ? "nav-item active" : "nav-item"}>
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}



