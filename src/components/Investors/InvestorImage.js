import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const InvestorImage = ({ className, children, style, tag = 'section' }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "Televenture-Investor.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const imageData = data.desktop.childImageSharp.fluid;
  return (
    <Image
      Tag={tag}
      style={style}
      className={className}
      fluid={imageData}
      imgStyle={{ objectFit: `cover`, objectPosition: `50% 50%` }}
    >
      {children}
    </Image>
  );
};

export default InvestorImage;
