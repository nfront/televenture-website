import React, { useRef } from 'react';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import Layout from '../components/Layout';
import Container from '../components/Container';
import ContactSection from '../components/Contact/ContactSection';
import SEO from '../components/SEO';

const Contact = ({ data }) => {
  const footer = useRef(null);

  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  };

  const scrollToFooter = () => {
    footer.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout ref={footer}>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <ContactSection scrollToFooter={scrollToFooter} />
      </Container>
    </Layout>
  );
};

export default Contact;
