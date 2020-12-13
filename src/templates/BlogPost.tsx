/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { graphql } from 'gatsby';
import { PostQuery } from '../../gatsby-graphql';
import { Post } from '../components/blog/PostList';
import ContentWrapper from '../components/common/ContentWrapper';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import { MDXRenderer, MDXRendererProps } from 'gatsby-plugin-mdx';
import { ReactNode } from 'react';

interface BlogPostProps {
  data: PostQuery;
}

const style = css`
  .post-body {
    padding: 4rem 0;
    font-size: 2rem;
    pre {
      font-size: 1.6rem;
    }
  }
`;

export default function BlogPost({ data }: BlogPostProps) {
  const { title, date, excerpt } = data.mdx?.frontmatter as Post;
  return (
    <Layout>
      <Header />
      <ContentWrapper>
        <div css={style}>
          <h1>{title}</h1>
          <hr />
          <div className="post-body">
            <MDXRenderer>{data.mdx?.body as string}</MDXRenderer>
          </div>
        </div>
      </ContentWrapper>
    </Layout>
  );
}

export const postQuery = graphql`
  query Post($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
      }
    }
  }
`;
