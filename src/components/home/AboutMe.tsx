/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import NodeJS from '../../images/svg/nodejs.inline.svg';
import OpenColor from 'open-color';

interface AboutMeProps {
  github: string;
  email: string;
}

const languageColor: { [key: string]: string } = {
  nodejs: '#339933',
  javascript: '#F7DF1E',
  typescript: '#3178C6',
  html5: '#E34F26',
  css3: '#1572B6',
  react: '#61DAFB',
  redux: '#764ABC',
  aws: '#232F3E',
};

const style = css`
  .badge {
    height: 4rem;
    padding: 1rem 1rem;

    svg {
      fill: white;
    }
  }

  ul {
    font-size: 1.8rem;

    li {
      .anticon {
        margin-right: 1rem;
      }
    }
  }
`;

export default function AboutMe({ github, email }: AboutMeProps) {
  return (
    <div css={style}>
      <h3>코딩하는 노가다 윤씨</h3>
      <p>🛠️ 이런 연장들을 약간 다룰줄 압니다.</p>
      <div></div>
      <ul>
        {github && (
          <li>
            <GithubOutlined />
            <a href={github}>{github}</a>
          </li>
        )}
        {email && (
          <li>
            <MailOutlined />
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        )}
      </ul>
    </div>
  );
}
