/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'gatsby';
import OpenColor from 'open-color';
import placeholder from '../../images/placeholder.png';

interface PostListItemProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

const style = css`
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  backface-visibility: hidden;
  background-color: #ffffff;

  .title {
    margin-top: 0;
    font-size: 1.8rem;
  }

  .excerpt {
    overflow: hidden;
    min-height: 6rem;
    font-size: 1.4rem;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border: none;
  }

  div {
    padding: 1rem 1rem;
  }

  &:hover {
    transform: translateY(-0.4rem);
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default function PostListItem({
  title,
  excerpt,
  image,
  slug,
}: PostListItemProps) {
  return (
    <div css={style}>
      <Link to={`/${slug}`}>
        <img src={image ? image : placeholder} />
        <div>
          <h4 className="title">{title}</h4>
          <p className="excerpt">
            {excerpt.length > 20 ? `${excerpt.substring(0, 20)}...` : excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
}
