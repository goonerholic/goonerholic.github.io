/**@jsx jsx */
import { jsx, css } from '@emotion/react';
import { ReactNode } from 'react';

interface Props {
  bgColor: string;
  children: ReactNode;
}

const style = (bgColor: string) => css`
  width: 100%;
  background-color: ${bgColor};
`;

function FullWidthContainer({ bgColor, children }: Props) {
  return <section css={style(bgColor)}>{children}</section>;
}

export default FullWidthContainer;
