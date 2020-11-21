/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import openColor from 'open-color';
import { ReactNode } from 'react';

interface ButtonProps {
  type: 'primary' | 'ghost' | 'dashed';
  danger?: boolean;
  size?: 'large' | 'small';
  onClick: (e: MouseEvent) => void;
  children: ReactNode;
}

const style = (props: ButtonProps) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  color: ${openColor.white};
  background-color: ${props.type === 'primary'
    ? openColor.blue[7]
    : openColor.white};
  font-size: ${props.size === 'large'
    ? '2rem'
    : props.size === 'small'
    ? '1.6rem'
    : '1.8rem'};
`;

export default function Button(props: ButtonProps) {
  return <div css={style(props)}>{props.children}</div>;
}
