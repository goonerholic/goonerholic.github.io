import React, { ReactElement } from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import ContentWrapper from '../components/common/ContentWrapper';
import AboutPreview from '../components/home/AboutPreview';
import PostPreview from '../components/home/PostPreview';
import aboutPreviewImage from '../images/about-preview.jpg';
import { graphql } from 'gatsby';
import { PostPreviewQuery } from '../../gatsby-graphql';
import PostList from '../components/blog/PostList';

interface Props {
  data: PostPreviewQuery;
}

export default function index({ data }: Props): ReactElement {
  return (
    <Layout>
      <Header />
      <ContentWrapper>
        <AboutPreview
          title="Welcome to my blog"
          img={aboutPreviewImage}
          description="Hello world!"
        />
        <PostList posts={data} />
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
