import React from 'react';
import { useState } from 'react';

import { Logo } from './Logo';
import {
  NavLinkWrapper,
  NavbarWrapper,
  StyledNavLink,
  StyledIconMenu,
} from '../styles/Navbar.styled';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const link = [
  {
    page: 'Home',
    href: '/',
  },
  {
    page: 'Favorites',
    href: '/favorites',
  },
];

export const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <NavbarWrapper>
      <Logo />
      <StyledIconMenu icon={faBars} onClick={() => setActive(!active)} />
      <NavLinkWrapper active={active}>
        {link.map((link) => (
          <StyledNavLink
            activeclassname="active"
            key={link.page}
            to={link.href}
          >
            {link.page}
          </StyledNavLink>
        ))}
      </NavLinkWrapper>
    </NavbarWrapper>
  );
};
