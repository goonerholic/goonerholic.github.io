/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx, css, Global } from '@emotion/react';

interface LayoutProps {
  children: ReactNode;
}

const style = css`
  html {
    font-size: 10px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: bold;
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
  }

  h4 {
    font-size: 1.8rem;
  }

  h5 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.6rem;
  }

  a {
    font-size: inherit;
    text-decoration: none;
    color: inherit;
  }
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Global styles={style} />
      {children}
    </div>
  );
}
