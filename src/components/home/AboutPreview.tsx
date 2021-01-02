/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ReactNode } from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { MainPageQuery } from '../../../gatsby-graphql';

interface AboutPreviewProps {
  mainImage: MainPageQuery['mainImage'];
  children: ReactNode;
}

const style = css`
  .grid-container {
    display: grid;
    grid-template-columns: minmax(60%, 2fr) 1fr;
    column-gap: 4rem;
  }
  /* 
  .main-image {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 0 8px 4px #dadada;
  } */

  @media only screen and (max-width: 767px) {
    .grid-container {
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
  }
`;

export default function AboutPreview({
  mainImage,
  children,
}: AboutPreviewProps) {
  return (
    <section css={style}>
      <div className="container grid-container">
        <Img
          fluid={mainImage!.childImageSharp!.fluid! as FluidObject}
          alt="main-image"
          style={{
            borderRadius: '1rem',
            boxShadow: `0 4px 8px 4px rgba(0, 0, 0, 0.2)`,
          }}
        />
        <div className="description">{children}</div>
      </div>
    </section>
  );
}
