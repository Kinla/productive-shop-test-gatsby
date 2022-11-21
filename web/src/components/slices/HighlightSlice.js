import * as React from 'react';
import styled from 'styled-components';
import HighlightCard from './HighlightCard';

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1212px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

const HighlightSlice = ({ items }) => (
  <Grid>
    {items.map((item) => (
      <HighlightCard key={item.id} {...item} />
    ))}
  </Grid>
);

export default HighlightSlice;
