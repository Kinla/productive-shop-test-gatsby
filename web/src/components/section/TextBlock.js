import * as React from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';

const Text = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-size: 22px;
  line-height: 31px;
  color: inherit;
`;

const myPortableTextComponents = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <Text>{children}</Text>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

const TextBlock = (props) => (
  // eslint-disable-next-line react/destructuring-assignment
  <PortableText value={props.value} components={myPortableTextComponents} />
);

export default TextBlock;
