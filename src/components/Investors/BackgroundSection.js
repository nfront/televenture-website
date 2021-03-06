import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import WithBackgroundCover from '../WithBackgroundCover';

const BackgroundSection = ({ className, children, style, tag = 'section', backgroundColor = '#040e18' }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "Televenture-148.jpg" }) {
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
      style={{ objectFit: `cover`, objectPosition: `50% 50%`, ...style }}
      className={className}
      fluid={imageData}
      backgroundColor={backgroundColor}
    >
      {children}
    </BackgroundImage>
  );
};

export default WithBackgroundCover(BackgroundSection, 'InvestorsCoverImage');
