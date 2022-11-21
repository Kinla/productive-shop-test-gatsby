import * as React from 'react';
import styled from 'styled-components';

const Card = styled.img`
  align-self: center;
`;

const AwardCard = ({ title, image = null }) => (
  <Card src={image.asset.url} alt={title} width={image.asset.width} height={image.asset.height} />
);

export default AwardCard;
