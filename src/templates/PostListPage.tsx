/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import { PostListQuery } from '../../gatsby-graphql';
import PostList from '../components/blog/PostList';
import ContentWrapper from '../components/common/ContentWrapper';
import Layout from '../components/common/Layout';
import Seo from '../components/common/Seo';

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

export default function PostListPage({ data }: PostListProps) {
  return (
    <Layout>
      <Seo title="Posts" />
      <ContentWrapper>
        <PostList posts={data.allMdx} />
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
