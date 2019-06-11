import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import Layout from '../components/Layout';
import PostSection from '../components/Post';
import Container from '../components/Container';
import SEO from '../components/SEO';

const PostTemplate = ({ data, pageContext }) => {
  const { title, slug } = data.contentfulPost;
  const postNode = data.contentfulPost;
  const { next, prev: previous } = pageContext;

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />
      <Container>
        <PostSection {...data.contentfulPost} previous={previous} next={next} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          timeToRead
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`;

export default PostTemplate;
