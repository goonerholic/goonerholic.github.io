/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'gatsby';
import OpenColor from 'open-color';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const style = css`
  display: flex;
  justify-content: center;
  padding: 6rem 0;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 20rem;

    .post-nav-link {
      color: ${OpenColor.gray[8]};
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: italic;

      &.prev,
      &.next {
        /* padding: 0 1rem;
        border: none;
        background-color: ${OpenColor.gray[8]};
        color: white; */
      }

      &.disabled {
        pointer-events: none;
        color: ${OpenColor.gray[4]};
      }
    }
  }
`;

export default function Pagination({
  totalPages,
  currentPage = 1,
}: PaginationProps) {
  return (
    <div css={style}>
      <ul>
        <li>
          <Link
            to={`/posts/${currentPage - 1 === 1 ? '' : currentPage - 1}`}
            className={`post-nav-link prev${
              currentPage === 1 ? ' disabled' : ''
            }`}
          >
            &#60; 이전 목록
          </Link>
        </li>
        <li>
          <Link
            to={`/posts/${currentPage + 1}`}
            className={`post-nav-link next${
              currentPage === totalPages ? ' disabled' : ''
            }`}
          >
            다음 목록 &#62;
          </Link>
        </li>
      </ul>
    </div>
  );
}
