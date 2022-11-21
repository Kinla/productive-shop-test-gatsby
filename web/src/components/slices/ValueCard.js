import * as React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-left: 2px solid #0b243f;
  padding: 0px 42px 20px 30px;
`;

const Title = styled.p`
  font-family: Inter;
  font-weight: 600;
  font-size: 35px;
  line-height: 31px;
  color: #2e6af4;
  margin-top: 0px;
`;

const Text = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-size: 22px;
  line-height: 31px;
`;

const ValueCard = ({ title, text }) => (
  <Card>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Card>
);

export default ValueCard;
