import * as React from 'react';
import styled from 'styled-components';
import AwardCard from './AwardCard';

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1212px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

const AwardSlice = ({ items }) => {
  console.log(items);
  return (
    <Grid>
      {items.map((item) => (
        <AwardCard key={item.id} {...item} />
      ))}
    </Grid>
  );
};

export default AwardSlice;
