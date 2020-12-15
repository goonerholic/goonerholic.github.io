/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { graphql } from 'gatsby';
import { PostListQuery } from '../../gatsby-graphql';
import PostList from '../components/blog/PostList';
import ContentWrapper from '../components/common/ContentWrapper';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';

interface PostListProps {
  pageContext: {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
  };
  data: PostListQuery;
}

// const style = css``;

export default function PostListPage({ pageContext, data }: PostListProps) {
  return (
    <Layout>
      <Header />
      <ContentWrapper>
        <PostList posts={data} />
      </ContentWrapper>
    </Layout>
  );
}

export const postListQuery = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
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
