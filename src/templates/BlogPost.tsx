/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { graphql } from 'gatsby';
import { PostQuery } from '../../gatsby-graphql';
import { Post } from '../components/blog/PostList';
import ContentWrapper from '../components/common/ContentWrapper';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Code from '../components/common/Code';
import { preToCodeBlock } from 'mdx-utils';
import Seo from '../components/common/Seo';
import OpenColor from 'open-color';

interface BlogPostProps {
  data: PostQuery;
}

const style = css`
  @media only screen and (max-width: 425px) {
    p {
      font-size: 1.6rem;
    }
  }

  .date {
    font-size: 1.4rem;
  }

  .post-body {
    padding: 4rem 0;

    p {
      font-size: 1.8rem;
      font-weight: 300;
      line-height: 1.6;
    }

    blockquote {
      padding: 1.8rem 1rem;
      border-left: 1rem solid ${OpenColor.gray[6]};
      background-color: ${OpenColor.gray[2]};
      margin: 1rem 0;
      font-style: italic;

      p {
        word-break: break-all;
        white-space: normal;
      }
    }

    table {
      margin: 1rem 0;
      font-size: 1.6rem;
      border-collapse: collapse;
      td,
      th {
        border: none;
      }
      th {
        padding: 2rem 2rem;
        background: ${OpenColor.gray[9]};
        color: #ffffff;
      }
      td {
        padding: 1rem 2rem;
        background: ${OpenColor.gray[0]};
      }
    }

    pre {
      font-size: 1.6rem;
      line-height: 1.6;
      font-family: 'Inconsolata';
      overflow-x: scroll;
      padding-bottom: 2rem;

      ::-webkit-scrollbar {
        height: 4px;
        border-radius: 1px;
      }

      ::-webkit-scrollbar-track {
        border-radius: 1px;
        background-color: ${OpenColor.gray[8]};
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 1px;
        background-color: ${OpenColor.gray[6]};
      }
    }

    .gatsby-highlight {
      position: relative;
      border-radius: 0.5rem;
      padding: 1rem 1rem;
      -webkit-overflow-scrolling: touch;
      margin: 2rem 0;
    }
    .gatsby-highlight pre[class*='language-'] {
      -webkit-overflow-scrolling: touch;
    }
    .gatsby-highlight pre[class*='language-']:before {
      background: black;
      border-radius: 0 0 0.25rem 0.25rem;
      color: white;
      font-size: 1.8rem;
      letter-spacing: 0.025rem;
      padding: 0.1rem 0.5rem;
      position: absolute;
      right: 1rem;
      text-align: right;
      text-transform: uppercase;
      top: 0;
    }

    .gatsby-highlight pre[class*='language-javascript']:before {
      content: 'js';
      background: #f7df1e;
      color: black;
    }

    .gatsby-highlight pre[class*='language-js']:before {
      content: 'js';
      background: #f7df1e;
      color: black;
    }

    .gatsby-highlight pre[class*='language-ts']:before {
      content: 'ts';
      background: #3178c6;
      color: white;
    }

    .gatsby-highlight pre[class*='language-html']:before {
      content: 'html';
      background: #005a9c;
      color: white;
    }

    .gatsby-highlight pre[class*='language-css']:before {
      content: 'css';
      background: #ff9800;
      color: white;
    }
  }
`;

const components = {
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <Code {...props} />;
    }
    return <pre {...preProps} />;
  },
};

export default function BlogPost({ data }: BlogPostProps) {
  const { title, date } = data.mdx?.frontmatter as Post;
  return (
    <Layout>
      <Seo title={title} />
      <Header />
      <ContentWrapper width={800}>
        <div css={style}>
          <h1>{title}</h1>
          <span className="date">{new Date(date).toLocaleString()}</span>
          <div className="post-body">
            <MDXProvider components={components}>
              <MDXRenderer>{data.mdx?.body as string}</MDXRenderer>
            </MDXProvider>
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
