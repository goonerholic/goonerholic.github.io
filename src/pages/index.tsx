import React, { ReactElement } from 'react';
import ContentWrapper from '../components/common/ContentWrapper';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import AboutPreview from '../components/home/AboutPreview';
import PostPreview from '../components/home/PostPreview';
import aboutPreviewImage from '../images/about-preview.jpg';

export default function index(): ReactElement {
  return (
    <Layout>
      <Header
        title="My blog"
        navItems={[
          { navItem: 'Home', link: '/' },
          { navItem: 'About', link: '/about' },
          { navItem: 'Blog', link: '/blog' },
        ]}
      />
      <ContentWrapper>
        <AboutPreview img={aboutPreviewImage} description="" />
        <PostPreview posts={[]} />
      </ContentWrapper>
    </Layout>
  );
}
