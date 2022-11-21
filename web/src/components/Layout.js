import * as React from 'react';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const Layout = ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;
