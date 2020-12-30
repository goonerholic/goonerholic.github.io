/** @jsx jsx */
import { jsx } from '@emotion/react';
import ContentWrapper from '../components/common/ContentWrapper';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import Seo from '../components/common/Seo';

export default function NotFound() {
  return (
    <Layout>
      <Seo title="Not Found" />
      <Header />
      <ContentWrapper>
        <h1>Page not found!</h1>
        <p>찾으시는 페이지는 없네요...</p>
      </ContentWrapper>
    </Layout>
  );
}
