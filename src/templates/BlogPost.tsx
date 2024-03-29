/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { graphql } from 'gatsby';
import { PostQuery } from '../../gatsby-graphql';
import { Post } from '../components/blog/PostList';
import ContentWrapper from '../components/common/ContentWrapper';
import Layout from '../components/common/Layout';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Code from '../components/common/Code';
import { preToCodeBlock } from 'mdx-utils';
import Seo from '../components/common/Seo';
import OpenColor from 'open-color';
import { Disqus } from 'gatsby-plugin-disqus';

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
    font-family: Helvetica, arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
    color: #333;

    & > *:first-child {
      margin-top: 0 !important;
    }

    & > *:last-child {
      margin-bottom: 0 !important;
    }

    a {
      color: #4183c4;
      text-decoration: none;
    }

    a.absent {
      color: #cc0000;
    }

    a.anchor {
      display: block;
      padding-left: 30px;
      margin-left: -30px;
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 20px 0 10px;
      padding: 0;
      font-weight: bold;
      -webkit-font-smoothing: antialiased;
      cursor: text;
      position: relative;
    }

    h2:first-child,
    h1:first-child,
    h1:first-child + h2,
    h3:first-child,
    h4:first-child,
    h5:first-child,
    h6:first-child {
      margin-top: 0;
      padding-top: 0;
    }

    h1:hover a.anchor,
    h2:hover a.anchor,
    h3:hover a.anchor,
    h4:hover a.anchor,
    h5:hover a.anchor,
    h6:hover a.anchor {
      text-decoration: none;
    }

    h1 tt,
    h1 code {
      font-size: inherit;
    }

    h2 tt,
    h2 code {
      font-size: inherit;
    }

    h3 tt,
    h3 code {
      font-size: inherit;
    }

    h4 tt,
    h4 code {
      font-size: inherit;
    }

    h5 tt,
    h5 code {
      font-size: inherit;
    }

    h6 tt,
    h6 code {
      font-size: inherit;
    }

    h1 {
      font-size: 28px;
      color: black;
    }

    h2 {
      font-size: 24px;
      border-bottom: 1px solid #cccccc;
      color: black;
    }

    h3 {
      font-size: 18px;
    }

    h4 {
      font-size: 16px;
    }

    h5 {
      font-size: 14px;
    }

    h6 {
      color: #777777;
      font-size: 14px;
    }

    p,
    blockquote,
    ul,
    ol,
    dl,
    table,
    pre {
      margin: 15px 0;
    }

    hr {
      border: 0 none;
      color: #cccccc;
      height: 4px;
      padding: 0;
    }

    & > h2:first-child {
      margin-top: 0;
      padding-top: 0;
    }

    & > h1:first-child {
      margin-top: 0;
      padding-top: 0;
    }

    & > h1:first-child + h2 {
      margin-top: 0;
      padding-top: 0;
    }

    body > h3:first-child,
    body > h4:first-child,
    body > h5:first-child,
    body > h6:first-child {
      margin-top: 0;
      padding-top: 0;
    }

    a:first-child h1,
    a:first-child h2,
    a:first-child h3,
    a:first-child h4,
    a:first-child h5,
    a:first-child h6 {
      margin-top: 0;
      padding-top: 0;
    }

    h1 p,
    h2 p,
    h3 p,
    h4 p,
    h5 p,
    h6 p {
      margin-top: 0;
    }

    li p.first {
      display: inline-block;
    }

    ul {
      list-style: disc;
    }

    ul,
    ol {
      padding-left: 30px;
    }

    ul :first-child,
    ol :first-child {
      margin-top: 0;
    }

    ul :last-child,
    ol :last-child {
      margin-bottom: 0;
    }

    dl {
      padding: 0;
    }

    dl dt {
      font-size: 14px;
      font-weight: bold;
      font-style: italic;
      padding: 0;
      margin: 15px 0 5px;
    }

    dl dt:first-child {
      padding: 0;
    }

    dl dt > :first-child {
      margin-top: 0;
    }

    dl dt > :last-child {
      margin-bottom: 0;
    }

    dl dd {
      margin: 0 0 15px;
      padding: 0 15px;
    }

    dl dd > :first-child {
      margin-top: 0;
    }

    dl dd > :last-child {
      margin-bottom: 0;
    }

    blockquote {
      border-left: 4px solid #dddddd;
      padding: 0 15px;
      color: #777777;
    }

    blockquote > :first-child {
      margin-top: 0;
    }

    blockquote > :last-child {
      margin-bottom: 0;
    }

    table {
      padding: 0;
    }
    table tr {
      border-top: 1px solid #cccccc;
      background-color: white;
      margin: 0;
      padding: 0;
    }

    table tr:nth-child(2n) {
      background-color: #f8f8f8;
    }

    table tr th {
      font-weight: bold;
      border: 1px solid #cccccc;
      text-align: left;
      margin: 0;
      padding: 6px 13px;
    }

    table tr td {
      border: 1px solid #cccccc;
      text-align: left;
      margin: 0;
      padding: 6px 13px;
    }

    table tr th :first-child,
    table tr td :first-child {
      margin-top: 0;
    }

    table tr th :last-child,
    table tr td :last-child {
      margin-bottom: 0;
    }

    img {
      max-width: 100%;
    }

    span.frame {
      display: block;
      overflow: hidden;
    }

    span.frame > span {
      border: 1px solid #dddddd;
      display: block;
      float: left;
      overflow: hidden;
      margin: 13px 0 0;
      padding: 7px;
      width: auto;
    }

    span.frame span img {
      display: block;
      float: left;
    }

    span.frame span span {
      clear: both;
      color: #333333;
      display: block;
      padding: 5px 0 0;
    }

    span.align-center {
      display: block;
      overflow: hidden;
      clear: both;
    }

    span.align-center > span {
      display: block;
      overflow: hidden;
      margin: 13px auto 0;
      text-align: center;
    }

    span.align-center span img {
      margin: 0 auto;
      text-align: center;
    }

    span.align-right {
      display: block;
      overflow: hidden;
      clear: both;
    }

    span.align-right > span {
      display: block;
      overflow: hidden;
      margin: 13px 0 0;
      text-align: right;
    }

    span.align-right span img {
      margin: 0;
      text-align: right;
    }

    span.float-left {
      display: block;
      margin-right: 13px;
      overflow: hidden;
      float: left;
    }

    span.float-left span {
      margin: 13px 0 0;
    }

    span.float-right {
      display: block;
      margin-left: 13px;
      overflow: hidden;
      float: right;
    }

    span.float-right > span {
      display: block;
      overflow: hidden;
      margin: 13px auto 0;
      text-align: right;
    }

    code,
    tt {
      margin: 0 2px;
      padding: 0 5px;
      white-space: pre-wrap;
      border: 1px solid #eaeaea;
      background-color: #f8f8f8;
      border-radius: 3px;
    }
    /*
    pre code {
      margin: 0;
      padding: 0;
      white-space: pre;
      border: none;
      background: transparent;
    }

    .highlight pre {
      background-color: #f8f8f8;
      font-size: 13px;
      line-height: 19px;
      overflow: auto;
      padding: 6px 10px;
      border-radius: 3px;
    }

    pre {
      background-color: #f8f8f8;
      border: 1px solid #cccccc;
      font-size: 13px;
      line-height: 19px;
      overflow: auto;
      padding: 6px 10px;
      border-radius: 3px;
    }

    pre code,
    pre tt {
      background-color: transparent;
      border: none;
    } */

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
  const { title, date, slug, excerpt } = data.mdx?.frontmatter as Post;
  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      <ContentWrapper width={800}>
        <section css={style}>
          <h1>{title}</h1>
          <span className="date">{new Date(date).toLocaleDateString()}</span>
          <hr />
          <article className="post-body">
            <MDXProvider components={components}>
              <MDXRenderer>{data.mdx?.body as string}</MDXRenderer>
            </MDXProvider>
          </article>
          <hr />
          <div className="comment">
            <Disqus
              config={{
                url: `https://goonerholic.github.io/${slug}`,
                identifier: slug,
                title,
              }}
            />
          </div>
        </section>
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
