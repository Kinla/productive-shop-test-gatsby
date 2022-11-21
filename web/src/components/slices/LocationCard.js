import * as React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-image: url('${(props) => props.bgImage}');
  background-position: center center;
  width: 354px;
  height: 318px;
  filter: drop-shadow(8px 8px 0px #59c7e4);
`;
const Name = styled.p`
  color: inherit;
  font-family: Inter;
  font-weight: 500;
  font-size: 22px;
  line-height: 31px;
`;

const LocationCard = ({ name, image = null }) => (
  <div>
    <Card bgImage={image?.asset?.url} />
    <Name>{name}</Name>
  </div>
);

export default LocationCard;
