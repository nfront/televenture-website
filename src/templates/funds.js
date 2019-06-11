import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Container from '../components/Container';
import SEO from '../components/SEO';
import FundSection from '../components/Funds';

const FundsTemplate = ({ data, pageContext }) => {
  const { slug, pages } = pageContext;
  const fundDetails = data.allContentfulFundDetails.edges;

  const postNode = {
    title: slug,
  };
  return (
    <Layout>
      <Helmet>
        <title>{slug}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath={slug} customTitle />

      <Container>
        <FundSection tabs={pages} fundDetails={fundDetails} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allContentfulFundDetails(filter: { fundName: { eq: $slug } }, sort: { fields: [order] }) {
      edges {
        node {
          id
          order
          fundName
          title
          founded
          url
          sector
          orgNo
          description {
            description
          }
          img {
            fixed(quality: 60, width: 250, height: 170) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`;

export default FundsTemplate;
