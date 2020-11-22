/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ReactNode } from 'react';

interface ContentWrapperProps {
  children: ReactNode;
}

const style = css`
  padding: 10rem 1rem;
  max-width: 993px;
  margin: 0 auto;
`;

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return <div css={style}>{children}</div>;
}
