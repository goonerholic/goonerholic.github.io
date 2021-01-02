/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { MainPageQuery } from '../../../gatsby-graphql';
import PostListItem from './PostListItem';

export interface Post {
  title: string;
  date: string;
  excerpt: string;
  image: string;
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
        const { title, excerpt, image, slug } = node.frontmatter as Post;
        return (
          <PostListItem
            key={title}
            title={title}
            excerpt={excerpt.substring(0, 20)}
            image={image}
            slug={slug}
          />
        );
      })}
    </div>
  );
}
