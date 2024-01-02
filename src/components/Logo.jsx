import React from 'react';
import { LogoImg } from '../styles/Navbar.styled';
import logo from '../assets/logo.svg';

export const Logo = () => {
  return <LogoImg src={logo} alt="logo" />;
};
