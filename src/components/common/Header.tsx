/** @jsx jsx */
// import { jsx, css } from '@emotion/core';
import { jsx, css } from '@emotion/react';
import { Link } from 'gatsby';
import openColor from 'open-color';
import { useState } from 'react';

interface HeaderProps {
  title: string;
  navItems: {
    navItem: string;
    link: string;
  }[];
}

const style = css`
  width: 100%;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${openColor.blue[9]};
  color: #ffffff;

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
      background-color: ${openColor.blue[6]};
      position: absolute;
      right: 0.2rem;
      top: 5.4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      visibility: hidden;
      border-radius: 0.6rem;

      li {
        padding: 1rem 1rem;

        & + & {
          border-top: 1px solid grey;
        }
      }

      &.active {
        visibility: visible;
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
        margin-left: 1rem;
      }
    }
  }
`;

export default function Header({ title, navItems }: HeaderProps) {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(!visible);
  };

  return (
    <header css={style}>
      <div className="header-logo">
        <Link to="/">{title}</Link>
      </div>
      <nav className="header-nav">
        <button className="header-nav-toggle-btn" onClick={onClick}>
          ☰
        </button>
        <ul className={`header-nav-list${visible ? ' active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index} className="header-nav-list-item">
              <Link to={item.link}>{item.navItem}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
