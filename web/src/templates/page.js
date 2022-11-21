import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/hero';
import Section from '../components/section';

export const query = graphql`
  query PageTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      title
      text
      image {
        asset {
          url
        }
      }
      sections {
        _key
        image {
          asset {
            url
          }
        }
        text: _rawText(resolveReferences: { maxDepth: 1 })
        color
        bgColor
        image {
          asset {
            url
          }
        }
        title
        slice {
          type
          items: _rawItems(resolveReferences: { maxDepth: 4 })
        }
        bgImage {
          asset {
            url
          }
        }
      }
      image {
        asset {
          url
        }
      }
    }
  }
`;

const Page = ({ data }) => {
  const { title, text, image, sections } = data.page;
  return (
    <Layout>
      <Hero title={title} text={text} image={image.asset.url} />
      {sections.map((section) => (
        <Section {...section} key={section._key} />
      ))}
    </Layout>
  );
};

export default Page;
