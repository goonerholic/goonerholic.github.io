/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { GithubOutlined } from '@ant-design/icons';
import TechBadge from '../common/TechBadge';

interface AboutMeProps {
  github: string;
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
  h3 {
    padding: 0;
    margin-top: 1rem;
  }

  ul {
    font-size: 1.8rem;
    padding: 0;
    li {
      .anticon {
        margin-right: 1rem;
      }
      padding: 1rem 0;
    }
  }
`;

export default function AboutMe({ github }: AboutMeProps) {
  return (
    <div css={style}>
      <h3>코딩하는 노가다 윤씨</h3>
      <ul>
        {github && (
          <li>
            <GithubOutlined />
            <a href={github}>{github}</a>
          </li>
        )}
      </ul>
      <div className="tech-badges">
        <p>🛠️ 이런 연장들을 약간 다룰줄 압니다.</p>
        {techStack.map((stack) => {
          const language = stack.toLowerCase();
          return (
            <TechBadge language={language} displayText={stack} key={language} />
          );
        })}
      </div>
    </div>
  );
}
