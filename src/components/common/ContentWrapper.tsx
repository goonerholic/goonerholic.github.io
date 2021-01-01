/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ReactNode } from 'react';

interface ContentWrapperProps {
  width?: number;
  children: ReactNode;
}

const style = (width: number) => css`
  min-height: calc(100vh - 95px);
  padding: 10rem 1rem 4rem 1rem;
  max-width: ${width}px;
  margin: 0 auto;
`;

export default function ContentWrapper({
  width = 993,
  children,
}: ContentWrapperProps) {
  return <div css={style(width)}>{children}</div>;
}
