import * as React from 'react';
import styled from 'styled-components';
import stars from './hero-stars.svg';

const Section = styled.section`
  position: relative;
  overflow: hidden;
  &:before {
    border-bottom: solid 20px #c2cefc;
    border-radius: 100%;
    position: absolute;
    background: linear-gradient(
      89.57deg,
      #0a2a4d 0.24%,
      #093365 27.03%,
      #074390 55.66%,
      #2251b3 99.5%
    );
    right: -200px;
    left: -200px;
    top: -200px;
    content: '';
    bottom: 0;
  }
`;

const OverlayImage = styled.div`
  background-image: url('${(props) => props.image}');
  background-position: center center;
  height: auto;
  height: 100%;
  width: 100%;
  position: absolute;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  z-index: 5;
  &:before {
    border-bottom: solid 20px #c2cefc;
    border-radius: 100%;
    position: absolute;
    right: -200px;
    left: -200px;
    top: -200px;
    bottom: 0;
    content: '';
  }
`;

const Container = styled.div`
  max-width: 1297px;
  padding: 60px 0px 80px 0px;
  margin-left: auto;
  margin-right: auto;
`;

const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 116px;
  height: 116px;
  display: block;
  position: relative;
  z-index: 10;
`;

const H1 = styled.h1`
  font-family: Poppins;
  font-weight: 600;
  font-size: 52px;
  line-height: 65px;
  text-align: center;
  color: #ffffff;
  max-width: 714px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 10;
`;

const Text = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-size: 22px;
  line-height: 31px;
  text-align: center;
  color: #ffffff;
  max-width: 907px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 10;
`;

const Hero = ({ title, text, image }) => (
  <Section>
    <OverlayImage image={stars} />
    <Container>
      <Image src={image} />
      <H1>{title}</H1>
      <Text>{text}</Text>
    </Container>
  </Section>
);

export default Hero;
