import * as React from 'react';
import styled from 'styled-components';
import LocationCard from './LocationCard';

const Grid = styled.div`
  display: flex;
  max-width: 1212px;
  margin-left: auto;
  margin-right: auto;
  column-gap: 45px;
  margin-top: 30px;
`;

const LocationSlice = ({ items }) => (
  <Grid>
    {items.map((item) => (
      <LocationCard key={item.id} {...item} />
    ))}
  </Grid>
);

export default LocationSlice;
