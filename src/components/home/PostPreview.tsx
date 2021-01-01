/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'gatsby';
import OpenColor from 'open-color';
import { PostPreviewQuery } from '../../../gatsby-graphql';
import PostList from '../blog/PostList';

interface PostPreviewProps {
  posts: PostPreviewQuery;
}

const style = css`
  padding: 4rem 0;

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    column-gap: 2rem;
    row-gap: 4rem;
  }

  .align-right {
    text-align: right;
    font-size: 1.6rem;
    color: ${OpenColor.blue[9]};
    padding-top: 2rem;
  }
`;

export default function PostPreview({ posts }: PostPreviewProps) {
  return (
    <section css={style}>
      <h2>최신 포스트</h2>
      <PostList posts={posts} />
      <div className="align-right">
        <Link to="/posts">더 많은 포스트 보기</Link>
      </div>
    </section>
  );
}
