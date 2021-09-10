import React from 'react';
import { PageProps } from 'gatsby';
import { Layout, NotFoundContainer, SEO } from 'components';

const NotFound: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Página não encontrada" />
    <NotFoundContainer />
  </Layout>
);

export default NotFound;
