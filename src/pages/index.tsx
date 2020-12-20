import React, { ReactElement } from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import ContentWrapper from '../components/common/ContentWrapper';
import AboutPreview from '../components/home/AboutPreview';
import PostPreview from '../components/home/PostPreview';
import aboutPreviewImage from '../images/about-preview.jpg';
import githubIcon from '../images/GitHub-Mark-32px.png';
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
      <Header />
      <ContentWrapper>
        <AboutPreview title="코딩하는 보통인부" img={aboutPreviewImage}>
          <AboutMe
            github="https://github.com/goonerholic"
            email="goonerholic@gmail.com"
          />
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
