/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';

interface AboutMeProps {
  github: string;
  email: string;
}

const style = css`
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
