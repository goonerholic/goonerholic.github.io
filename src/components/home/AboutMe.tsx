/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import TechBadge from '../common/TechBadge';

interface AboutMeProps {
  github: string;
  email: string;
}

const techStack = [
  'NodeJS',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'React',
  'Redux',
  'AWS',
];

const style = css`
  .tech-badges {
    padding: 2rem 0;
  }

  ul {
    font-size: 1.8rem;

    li {
      .anticon {
        margin-right: 1rem;
      }
      padding: 1rem 0;
    }
  }
`;

export default function AboutMe({ github, email }: AboutMeProps) {
  return (
    <div css={style}>
      <h3>코딩하는 노가다 윤씨</h3>
      <p>🛠️ 이런 연장들을 약간 다룰줄 압니다.</p>
      <div className="tech-badges">
        {techStack.map((stack) => {
          const language = stack.toLowerCase();
          return (
            <TechBadge language={language} displayText={stack} key={language} />
          );
        })}
      </div>
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
