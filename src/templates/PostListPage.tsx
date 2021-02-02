/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import { PostListQuery } from '../../gatsby-graphql';
import PostList from '../components/blog/PostList';
import ContentWrapper from '../components/common/ContentWrapper';
import Layout from '../components/common/Layout';
import PostNav from '../components/common/Pagination';
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

export default function PostListPage({ data, pageContext }: PostListProps) {
  const { numPages, currentPage } = pageContext;

  return (
    <Layout>
      <Seo title="Posts" />
      <ContentWrapper>
        <PostList posts={data.allMdx} />
        <PostNav totalPages={numPages} currentPage={currentPage} />
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
          excerpt
          frontmatter {
            date
            title
            slug
            image {
              childImageSharp {
                fluid(maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
