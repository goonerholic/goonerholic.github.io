/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { BlogIndexQuery } from '../../gatsby-graphql';

interface Props {
  data: BlogIndexQuery;
}

const BlogPost = ({ data }: Props) => {
  return <div></div>;
};

export default BlogPost;
