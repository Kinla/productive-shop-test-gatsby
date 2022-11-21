import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 15px;
  width: 325px;
  height: 292px;
  border: 1px solid #0554ba;
  margin: 0px 15px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.p`
  font-family: Poppins;
  font-weight: 600;
  font-size: 24px;
  line-height: 43px;
  margin-bottom: 0px;
`;

const Text = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
const Front = styled.div`
  text-align: center;
`;

const Back = styled.div`
  text-align: left;
  padding: 16px;
`;

const HighlightCard = ({ image, text, title }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const frontContent = () => (
    <Front>
      <img src={image.asset.url} width="120px" height="120px" alt="" />
      <Title>{title}</Title>
    </Front>
  );

  const backContent = () => (
    <Back>
      <img src={image.asset.url} width="32px" height="32px" alt="" />
      <Text>{text}</Text>
    </Back>
  );

  return (
    <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {hover ? backContent() : frontContent()}
    </Card>
  );
};

export default HighlightCard;
