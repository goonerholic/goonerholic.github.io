/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { graphql } from 'gatsby';
import { useMemo } from 'react';
import { PostListQuery } from '../../gatsby-graphql';
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
        <div className="grid-container">
          {data.allMdx.edges
            .filter((edge) => edge.node.frontmatter)
            .map(({ node }) => {
              const { title, excerpt, image } = node.frontmatter as {
                title: string;
                excerpt: string;
                image: string;
              };
              return (
                <PostListItem
                  key={title}
                  title={title}
                  excerpt={excerpt.substring(0, 20)}
                  image={image}
                />
              );
            })}
        </div>
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
