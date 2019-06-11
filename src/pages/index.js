import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import SEO from '../components/SEO';

import HomeSection from '../components/Home';

const Home = () => {
  return (
    <Layout>
      <SEO />
      <Container>
        <HomeSection />
      </Container>
    </Layout>
  );
};

Home.displayName = 'Home';
export default Home;
