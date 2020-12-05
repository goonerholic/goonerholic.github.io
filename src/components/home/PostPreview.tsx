/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'gatsby';
import OpenColor from 'open-color';
<<<<<<< HEAD
import { PostPreviewQuery } from '../../../gatsby-graphql';
import PostList from '../blog/PostList';
=======
import placeholder from '../../images/placeholder.png';
>>>>>>> configure plugins

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

  .align-right {
    text-align: right;
    font-size: 1.6rem;
    color: ${OpenColor.blue[9]};
    padding-top: 2rem;
  }
`;

export default function PostPreview({ posts }: PostPreviewProps) {
  return (
    <div css={style}>
      <h2>Recent Posts</h2>
<<<<<<< HEAD
      <PostList posts={posts} />
      <div className="align-right">
        <Link to="/posts">See more posts</Link>
      </div>
=======
      <div className="grid-container">
        <div className="post">
          <img src={placeholder} />
          <div>
            <h4>Title</h4>
            <p>Post preview........</p>
          </div>
        </div>
        <div className="post">
          <img src={placeholder} />
          <div>
            <h4>Title</h4>
            <p>Post preview........</p>
          </div>
        </div>
        <div className="post">
          <img src={placeholder} />
          <div>
            <h4>Title</h4>
            <p>Post preview........</p>
          </div>
        </div>
        <div className="post">
          <img src={placeholder} />
          <div>
            <h4>Title</h4>
            <p>Post preview........</p>
          </div>
        </div>
        <div className="post">
          <img src={placeholder} />
          <div>
            <h4>Title</h4>
            <p>Post preview........</p>
          </div>
        </div>
        <div className="post">
          <img src={placeholder} />
          <div>
            <h4>Title</h4>
            <p>Post preview........</p>
          </div>
        </div>
      </div>
      <div className="align-right">
        <Link to="/blog">Go to blog</Link>
      </div>
>>>>>>> configure plugins
    </div>
  );
}
