import React from 'react';
import { PageProps } from 'gatsby';
import { Layout, NotFoundContainer } from '@/components';

const NotFound: React.FC<PageProps> = () => (
  <Layout>
    <NotFoundContainer />
  </Layout>
);

export default NotFound;
