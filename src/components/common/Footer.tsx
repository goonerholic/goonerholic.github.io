/**@jsx jsx */
import { jsx, css } from '@emotion/react';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';

interface Props {
  github?: string;
  email?: string;
  linkedIn?: string;
}

const style = css`
  padding: 1.6rem 0;
  font-size: 2rem;
  text-align: center;
  font-weight: normal;

  span + span {
    margin-left: 1rem;
  }
`;

function Footer({ github, email, linkedIn }: Props) {
  return (
    <div css={style}>
      {github && (
        <span>
          <a href={github}>
            <GithubOutlined />
          </a>
        </span>
      )}
      {email && (
        <span>
          <a href={`mailto:${email}`}>
            <MailOutlined />
          </a>
        </span>
      )}
      {linkedIn && (
        <span>
          <a href={linkedIn}>
            <LinkedinOutlined />
          </a>
        </span>
      )}
      <p>Powered by Gatsby</p>
    </div>
  );
}

export default Footer;
