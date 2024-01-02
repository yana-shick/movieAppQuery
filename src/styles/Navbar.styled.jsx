import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #b2a4ff;
  padding: 1rem 3rem;
  position: relative;
  @media (max-width: 704px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const LogoImg = styled.img`
  width: 150px;
  align-self: start;
`;

const NavLinkWrapper = styled.div`
  @media (max-width: 704px) {
    display: ${(props) => (props.active ? 'block' : 'none')};
    text-align: center;
    padding: 2rem 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.2sec;
  color: #fdf7c3;
  margin-left: 2rem;
  &: hover {
    color: #ffdeb4;
  }
  &.${(props) => props.activeclassname} {
    color: #ffb4b4;
  }
  @media (max-width: 704px) {
    display: block;
    margin: 2rem auto;
  }
`;

const StyledIconMenu = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  right: 20px;
  top: 21px;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  @media (max-width: 704px) {
    display: block;
  }
`;

export {
  LogoImg,
  NavbarWrapper,
  NavLinkWrapper,
  StyledNavLink,
  StyledIconMenu,
};
