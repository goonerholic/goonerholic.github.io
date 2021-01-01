import React, { ReactElement } from 'react';
import Layout from '../components/common/Layout';
import ContentWrapper from '../components/common/ContentWrapper';
import AboutPreview from '../components/home/AboutPreview';
import PostPreview from '../components/home/PostPreview';
import mainImage from '../images/main-image.jpg';
import { graphql } from 'gatsby';
import { PostPreviewQuery } from '../../gatsby-graphql';
import Seo from '../components/common/Seo';
import AboutMe from '../components/home/AboutMe';

interface Props {
  data: PostPreviewQuery;
}

export default function index({ data }: Props): ReactElement {
  return (
    <Layout>
      <Seo title="Home" />
      <ContentWrapper>
        <AboutPreview img={mainImage}>
          <AboutMe github="https://github.com/goonerholic" />
        </AboutPreview>
        <PostPreview posts={data} />
      </ContentWrapper>
    </Layout>
  );
}

export const postPreview = graphql`
  query PostPreview {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 6) {
      edges {
        node {
          frontmatter {
            date
            title
            slug
            excerpt
          }
        }
      }
    }
  }
`;
