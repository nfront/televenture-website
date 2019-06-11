import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ className, children, tag = 'section', backgroundColor = '#040e18' }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "televenture_Footer.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const imageData = data.desktop.childImageSharp.fluid;
  return (
    <BackgroundImage
      Tag={tag}
      className={className}
      fluid={imageData}
      style={{
        objectFit: `cover`,
        objectPosition: `50% 50%`,
        position: 'absolute',
      }}
      backgroundColor={backgroundColor}
    >
      {children}
    </BackgroundImage>
  );
};

export default BackgroundSection;
