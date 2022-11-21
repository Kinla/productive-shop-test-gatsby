import * as React from 'react';
import styled from 'styled-components';
import arrow from './arrow_back.svg';

const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
`;

const Image = styled.img`
  border: 9px solid #ffffff;
  border-radius: 100%;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
`;
const Text = styled.p`
  text-transform: uppercase;
  color: #000000;
  font-family: Poppins;
  font-weight: 600;
  size: 16px;
  line-height: 24px;
`;

const ServiceCard = ({ title, image = null }) => (
  <Container href="#">
    <Image src={image.asset.url} alt="" width="135px" height="135px" />
    <Text>
      {title} <img src={arrow} alt="" />
    </Text>
  </Container>
);

export default ServiceCard;
