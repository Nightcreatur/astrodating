
import React from 'react';
import styled from 'styled-components';
import { FaHome, FaHeart, FaComment, FaUser } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #000;
  color: white;
`;

const BottomNav = () => (
    <Nav>
        <FaHome size={24} />
        <FaHeart size={24} />
        <FaComment size={24} />
        <FaUser size={24} />
    </Nav>
);

export default BottomNav;
