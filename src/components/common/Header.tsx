/** @jsx jsx */
// import { jsx, css } from '@emotion/core';
import { jsx, css } from '@emotion/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import openColor from 'open-color';
import { useEffect, useRef, useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { boxShadow } from '../../utils/styleFragments';

const style = css`
  width: 100%;
  padding: 1.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000;
  background-color: ${openColor.gray[9]};
  transition: background-color 0.4s;
  color: #ffffff;

  .container {
    max-width: 993px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  &.scrolled {
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .header-logo {
    color: inherit;
    font-size: 2.4rem;
  }

  .header-nav {
    ul {
      list-style: none;
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 767px) {
    .header-nav-toggle-btn {
      display: inline-block;
      border: none;
      background-color: transparent;
      color: #ffffff;
      outline: none;
      cursor: pointer;
      font-size: 1.6rem;
    }

    .header-nav-list {
      display: none;

      &.active {
        display: flex;
        background-color: ${openColor.gray[7]};
        position: absolute;
        right: 1rem;
        top: 6.4rem;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 0.6rem;
        ${boxShadow};

        li {
          padding: 2rem 2rem;
          margin: 0 1rem;

          &:not(:last-child) {
            border-bottom: 1px solid ${openColor.gray[6]};
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .header-nav-toggle-btn {
      display: none;
    }

    .header-nav-list {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      list-style: none;

      .header-nav-list-item {
        margin-left: 2rem;
      }
    }
  }
`;

export default function Header() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  const [visible, setVisible] = useState(false);
  const header = useRef<HTMLElement>(null);

  const onClick = () => {
    setVisible(!visible);
  };

  const handleScroll = () => {
    if (!header.current) return;
    if (window.scrollY > 0) {
      header.current.classList.add('scrolled');
    } else {
      header.current.classList.remove('scrolled');
    }
  };

  useEffect(() => {
    if (header.current) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header css={style} ref={header}>
      <div className="container">
        <div className="header-logo">
          <Link to="/">{site.siteMetadata.title}</Link>
        </div>
        <nav className="header-nav">
          <button className="header-nav-toggle-btn" onClick={onClick}>
            <MenuOutlined />
          </button>
          <ul className={`header-nav-list${visible ? ' active' : ''}`}>
            <li className="header-nav-list-item">
              <Link to={'/'}>홈</Link>
            </li>
            {/* <li className="header-nav-list-item">
              <Link to={'/about'}>About</Link>
            </li> */}
            <li className="header-nav-list-item">
              <Link to={'/posts'}>포스트</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
