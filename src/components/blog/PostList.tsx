/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FluidObject } from 'gatsby-image';
import { MainPageQuery } from '../../../gatsby-graphql';
import PostListItem from './PostListItem';

export interface Post {
  title: string;
  date: string;
  excerpt: string;
  image: { childImageSharp: { fluid: FluidObject } };
  slug: string;
}

interface PostListProps {
  posts: MainPageQuery['postList'];
}

const style = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 2rem;
  row-gap: 4rem;
`;

export default function PostList({ posts }: PostListProps) {
  return (
    <div css={style}>
      {posts.edges.map(({ node }) => {
        const { title, image, slug } = node.frontmatter as Post;
        const { excerpt } = node;
        return (
          <PostListItem
            key={title}
            title={title}
            excerpt={excerpt}
            image={image}
            slug={slug}
          />
        );
      })}
    </div>
  );
}
