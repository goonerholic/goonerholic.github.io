/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx, css, Global } from '@emotion/react';

interface LayoutProps {
  children: ReactNode;
}

const style = css`
  /* @import '../../../language-tabs.css'; */

  html {
    font-size: 10px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 4.8rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 1.6rem;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 1.6rem;
  }

  h4 {
    font-size: 2.2rem;
    margin-bottom: 1.6rem;
  }

  h5 {
    font-size: 2rem;
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 200;
  }

  a {
    font-size: inherit;
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (max-width: 425px) {
    h1 {
      font-size: 3rem;
    }
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
