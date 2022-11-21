/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import styled from 'styled-components';
import nav from './nav.svg';
import logo from './logo.svg';

const Nav = styled.nav`
  background-image: url('${(props) => props.bgImg}');
  height: 93px;
  display: flex;
  align-items: center;
  padding: 0 4.36%;
`;

const Header = () => (
  <Nav bgImg={nav}>
    <a href="#">
      <img src={logo} alt="company homepage" />
    </a>
  </Nav>
);

export default Header;
