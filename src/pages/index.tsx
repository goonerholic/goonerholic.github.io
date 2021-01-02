import React from 'react';
import Layout from '../components/common/Layout';
import ContentWrapper from '../components/common/ContentWrapper';
import AboutPreview from '../components/home/AboutPreview';
import PostPreview from '../components/home/PostPreview';
import { graphql } from 'gatsby';
import { MainPageQuery } from '../../gatsby-graphql';
import Seo from '../components/common/Seo';
import AboutMe from '../components/home/AboutMe';
import FullWidthContainer from '../components/common/FullWidthContainer';
import OpenColor from 'open-color';

interface Props {
  data: MainPageQuery;
}

export default function index({ data }: Props) {
  return (
    <Layout>
      <Seo title="Home" />
      <FullWidthContainer bgColor="#ffffff">
        <ContentWrapper>
          <AboutPreview mainImage={data.mainImage}>
            <AboutMe github="https://github.com/goonerholic" />
          </AboutPreview>
        </ContentWrapper>
      </FullWidthContainer>
      <FullWidthContainer bgColor={OpenColor.gray[1]}>
        <ContentWrapper>
          <PostPreview posts={data.postList} />
        </ContentWrapper>
      </FullWidthContainer>
    </Layout>
  );
}

export const postPreview = graphql`
  query MainPage {
    mainImage: file(relativePath: { eq: "main-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    postList: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 6
    ) {
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
