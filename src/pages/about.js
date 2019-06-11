import React from 'react';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import Layout from '../components/Layout';
import Container from '../components/Container';
import SEO from '../components/SEO';

import AboutSection from '../components/About';

const Investors = () => {
  const postNode = {
    title: `About | ${config.siteTitle}`,
  };

  return (
    <Layout>
      <Helmet>
        <title>{`About | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="about" customTitle />
      <Container>
        <AboutSection />
      </Container>
    </Layout>
  );
};

export default Investors;
