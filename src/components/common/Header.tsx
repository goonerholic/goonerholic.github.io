/** @jsx jsx */
// import { jsx, css } from '@emotion/core';
import { jsx, css } from '@emotion/react';
import { Link } from 'gatsby';
import openColor from 'open-color';
import { useEffect, useRef, useState } from 'react';

const style = css`
  width: 100%;
  padding: 1.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;

  color: #ffffff;
  z-index: 1000;
  background-color: ${openColor.blue[9]};
  transition: background-color 0.4s;

  .container {
    max-width: 993px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

      li {
        padding: 1rem 1rem;

        & + & {
          border-top: 1px solid grey;
        }
      }

      &.active {
        display: flex;
        background-color: ${openColor.blue[6]};
        position: absolute;
        right: 1rem;
        top: 5.4rem;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 0.6rem;
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
          <Link to="/">노가다 윤씨</Link>
        </div>
        <nav className="header-nav">
          <button className="header-nav-toggle-btn" onClick={onClick}>
            ☰
          </button>
          <ul className={`header-nav-list${visible ? ' active' : ''}`}>
            <li className="header-nav-list-item">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="header-nav-list-item">
              <Link to={'/about'}>About</Link>
            </li>
            <li className="header-nav-list-item">
              <Link to={'/posts'}>Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
