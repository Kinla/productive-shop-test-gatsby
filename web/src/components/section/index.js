import * as React from 'react';
import styled from 'styled-components';
import TextBlock from './TextBlock';
import flourish from './h2-flourish.svg';
import AwardSlice from '../slices/AwardSlice';
import HighlightSlice from '../slices/HighlightSlice';
import LocationSlice from '../slices/LocationSlice';
import ServiceSlice from '../slices/ServiceSlice';
import ValueSlice from '../slices/ValueSlice';

const OuterContainer = styled.section`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  background-image: url('${(props) => props.bgImage}');
  background-position: center center;
  padding: 80px 0px;
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1212px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 406px;
  height: 406px;
  display: block;
  margin-left: 108px;
`;

const H2Wrapper = styled.div`
  position: relative;
  margin-left: -20px;
`;

const H2 = styled.h2`
  font-family: Poppins;
  font-weight: 500;
  font-size: 40px;
  line-height: 65px;
  color: inherit;
  position: absolute;
  top: -40px;
  left: 20px;
`;

const Section = ({
  title,
  text,
  image = null,
  color = 'inherit',
  bgColor = 'inherit',
  bgImage = null,
  slice,
}) => {
  const { type, items } = slice;

  const selector = (sliceType, sliceItems) => {
    switch (sliceType) {
      case 'awards':
        return <AwardSlice items={sliceItems} />;
      case 'highlights':
        return <HighlightSlice items={sliceItems} />;
      case 'locations':
        return <LocationSlice items={sliceItems} />;
      case 'values':
        return <ValueSlice items={sliceItems} />;
      case 'services':
        return <ServiceSlice items={sliceItems} />;

      default:
        return <div>Under construction</div>;
    }
  };

  return (
    <OuterContainer color={color} bgColor={bgColor} bgImage={bgImage?.asset?.url}>
      <Container>
        <div style={{ width: '100%' }}>
          <H2Wrapper>
            <img src={flourish} alt="" />
            <H2>{title}</H2>
          </H2Wrapper>
          {text && <TextBlock value={text} />}
        </div>
        {image && <Image src={image?.asset?.url} />}
      </Container>
      {type && selector(type, items)}
    </OuterContainer>
  );
};

export default Section;
