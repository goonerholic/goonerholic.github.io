/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ReactNode } from 'react';

interface ContentWrapperProps {
  width?: number;
  children: ReactNode;
}

const style = (width: number) => css`
  padding: 4rem 1rem;
  max-width: ${width}px;
  margin: 0 auto;
`;

export default function ContentWrapper({
  width = 993,
  children,
}: ContentWrapperProps) {
  return <div css={style(width)}>{children}</div>;
}
