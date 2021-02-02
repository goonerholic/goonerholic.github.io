/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx, css, Global } from '@emotion/react';
import OpenColor from 'open-color';
import Footer from './Footer';
import Header from './Header';

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

  .body {
    padding-top: 5.9rem;
    min-height: calc(100vh - 10rem);
    font-family: -apple-system, Roboto, 'Noto Sans KR';
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 3rem;

    /* &:first-of-type {
      margin-top: 0;
    } */
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
    margin: 1rem 0;
  }

  a {
    font-size: inherit;
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    font-size: 1.6rem;
  }

  ol {
    font-size: 1.6rem;
  }

  li {
    padding: 0.5rem 0;
  }

  .icon {
    width: 1.6rem;
    height: 1.6rem;
  }

  hr {
    border: 1px solid ${OpenColor.gray[4]};
    margin: 1rem 0;
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
      <Header />
      <div className="body">{children}</div>
      <Footer
        github="https://github.com/goonerholic"
        email="goonerholic@gmail.com"
        linkedIn="https://www.linkedin.com/in/taehwa-yoon-a88253102/"
      />
    </div>
  );
}
