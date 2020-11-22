/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import placeholder from '../../images/placeholder.png';

interface PostPreviewProps {
  posts: any[];
}

const style = css`
  padding: 4rem 0;
  background-color: #fcfcfc;

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    column-gap: 2rem;
    row-gap: 4rem;

    .post {
      border-radius: 0.5rem;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      backface-visibility: hidden;

      img {
        width: 100%;
        height: auto;
        z-index: -100;
        border-radius: 0.5rem 0.5rem 0 0;
        padding: 0.5rem;
      }

      div {
        padding: 1rem 1rem;
      }

      &:hover {
        transform: translateY(-0.4rem);
      }
    }
  }
`;

export default function PostPreview({ posts }: PostPreviewProps) {
  return (
    <div css={style}>
      <h2>Recent Posts</h2>
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
        <div className="post">
          <img src={placeholder} />
          <div>
            <h4>Title</h4>
            <p>Post preview........</p>
          </div>
        </div>
      </div>
      <a href="/blog">All posts</a>
    </div>
  );
}
