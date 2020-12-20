/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ReactNode } from 'react';

interface AboutPreviewProps {
  img: string;
  title: string;
  children: ReactNode;
}

const style = css`
  .grid-container {
    display: grid;
    grid-template-columns: minmax(60%, 2fr) 1fr;
    column-gap: 4rem;
  }

  .main-image {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    /* box-shadow: 0 0 8px 4px #dadada; */
  }

  @media only screen and (max-width: 767px) {
    .grid-container {
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
  }
`;

export default function AboutPreview({
  img,
  title,
  children,
}: AboutPreviewProps) {
  return (
    <div css={style}>
      <div className="container grid-container">
        <img className="main-image" src={img} />
        <div className="description">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}
