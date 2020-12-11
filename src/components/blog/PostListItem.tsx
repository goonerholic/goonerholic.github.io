/** @jsx jsx */
import { jsx, css } from '@emotion/react';

interface PostListItemProps {
  title: string;
  excerpt: string;
  image: string;
}

const style = css`
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  backface-visibility: hidden;

  img {
    width: 100%;
    height: 200px;
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
`;

export default function PostListItem({
  title,
  excerpt,
  image,
}: PostListItemProps) {
  return (
    <div css={style}>
      <img src={image} />
      <div>
        <h4>{title}</h4>
        <p>{excerpt.substring(0, 20)}</p>
      </div>
    </div>
  );
}
