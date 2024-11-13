
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Home from '../../assets/Homeicon.svg'
import Heart from '../../assets/HeartIcon.svg'
import Message from '../../assets/MsgIcon.svg'
import Profile from '../../assets/ProfileIcon.svg'
import './BottomNav.css'


const BottomNav = () => {
  const [activeLink, setActiveLink] = useState('/home');

  return (
    <nav className="bottom-nav">
      <Link
        to="/home"
        onClick={() => setActiveLink('/home')}
        className={`nav-item ${activeLink === '/home' ? 'active' : ''}`}
      >
        <img src={Home} alt="Home" />
      </Link>
      <Link
        to="/home"
        onClick={() => setActiveLink('/j')}
        className={`nav-item ${activeLink === '/j' ? 'active' : ''}`}
      >
        <img src={Heart} alt="Heart" />
      </Link>
      <Link
        to="/message"
        onClick={() => setActiveLink('/message')}
        className={`nav-item ${activeLink === '/message' ? 'active' : ''}`}
      >
        <img src={Message} alt="Message" />
      </Link>
      <Link
        to="/profile"
        onClick={() => setActiveLink('/profile')}
        className={`nav-item ${activeLink === '/profile' ? 'active' : ''}`}
      >
        <img src={Profile} alt="Profile" />
      </Link>
    </nav>
  );
}

export default BottomNav;
