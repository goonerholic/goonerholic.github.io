import React, { ReactElement } from 'react';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';

export default function index(): ReactElement {
  return (
    <Layout>
      <Header
        title="My blog"
        navItems={[
          { navItem: 'Home', link: '/' },
          { navItem: 'About', link: '/about' },
        ]}
      />
    </Layout>
  );
}
