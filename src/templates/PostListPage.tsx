/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { graphql } from 'gatsby';
import { useMemo } from 'react';
import { PostListQuery } from '../../gatsby-graphql';
import PostList from '../components/blog/PostList';
import PostListItem from '../components/blog/PostListItem';
import ContentWrapper from '../components/common/ContentWrapper';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import PostPreview from '../components/home/PostPreview';

interface PostListProps {
  pageContext: {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
  };
  data: PostListQuery;
}

const style = css``;

export default function PostListPage({ pageContext, data }: PostListProps) {
  console.log(data);
  console.log(pageContext);
  // const { currentPage, numPages } = pageContext;
  // const isFirst = useMemo(() => currentPage === 1, [currentPage]);
  // const isLast = useMemo(() => currentPage === numPages, [
  //   currentPage,
  //   numPages,
  // ]);
  // const prevPage = useMemo(
  //   () => (currentPage - 1 === 1 ? '/' : `${currentPage - 1}`),
  //   [currentPage],
  // );
  // const nextPage = useMemo(() => `/${currentPage + 1}`, [currentPage]);

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
