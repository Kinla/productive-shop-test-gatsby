import * as React from 'react';
import styled from 'styled-components';
import ValueCard from './ValueCard';

const Container = styled.div`
  max-width: 1212px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  margin: 0px -63px;
  display: flex;
  border: solid 1px #000000;
  background-color: #f3f9fe;
  box-shadow: 0px 0px 8px rgba(5, 81, 182, 0.25);
  border-radius: 5px;
  padding-top: 48px;
  padding-left: 63px;
`;

const ServiceSlice = ({ items }) => {
  console.log(items);
  return (
    <Container>
      <Grid>
        {items.map((item) => (
          <ValueCard key={item.id} {...item} />
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceSlice;
