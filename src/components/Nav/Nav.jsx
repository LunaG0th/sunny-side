import React, { useEffect } from 'react';
import { useState } from 'react';
import openIcon from '/open.svg';
import closeIcon from '/close.svg';
import Logo from '/logo.svg';
import Button from '../Button/Button';
import './Nav.css';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';

function Nav() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280); // state for useEffect
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked((open) => !open);
  };

  const closeMobileNav = () => {
    setClicked(false);
  };

  // add container class if screen is > tham 1280px
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); // end off useEffect

  return (
    <nav>
      <div className={`nav__wrapper ${isLargeScreen ? 'container' : ''}`}>
        <div className='nav__logo'>
          <RouterLink to='/'>
            <img src={Logo} alt='company logo' />
          </RouterLink>
        </div>

        <div className={clicked ? 'nav__menu toggle' : 'nav__menu'}>
          <ul>
            <li onClick={closeMobileNav}>About
              {/* <NavLink to=''>About</NavLink> */}
            </li>
            <li onClick={closeMobileNav}>
              <ScrollLink to='services' smooth={true} duration={500} >Service</ScrollLink>
            </li>
            <li onClick={closeMobileNav}>
            <ScrollLink to='testimonials' smooth={true} duration={500} >Testimonials</ScrollLink>
            </li>
          </ul>
          <Button onClick={closeMobileNav}>CONTACT</Button>
        </div>

        <div className='mobile__menu_btn' onClick={toggleMenu}>
          <img src={clicked ? closeIcon : openIcon} alt='nav menu' />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
