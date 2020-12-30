/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import IconProvider from '../../utils/IconProvider';

interface TechBadgeProps {
  language: string;
  displayText: string;
}

const bgColor: { [key: string]: string } = {
  nodejs: '#339933',
  javascript: '#F7DF1E',
  typescript: '#3178C6',
  html5: '#E34F26',
  css3: '#1572B6',
  react: '#61DAFB',
  redux: '#764ABC',
  aws: '#232F3E',
};

const style = (language: string) => css`
  /* height: 20px; */
  padding: 0.4rem 1rem;
  font-size: 1.6rem;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background-color: ${bgColor[language]};
  border-radius: 0.5rem;
  color: #000000;
  margin-top: 1rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  span {
    height: 20px;
    display: flex;
    align-items: center;
    color: white;
  }

  span + span {
    margin-left: 1rem;
  }

  svg {
    fill: #ffffff;
  }
`;

export default function TechBadge({ language, displayText }: TechBadgeProps) {
  return (
    <div css={style(language)}>
      <span>
        <IconProvider height="20px" width="20px" language={language} />
      </span>
      <span>{displayText}</span>
    </div>
  );
}
