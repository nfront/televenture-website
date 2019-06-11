import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const TeleventureLogo = ({ className, style, tag = 'div', backgroundColor = '#040e18' }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "televenture_gre_small.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 250) {
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
      backgroundColor={backgroundColor}
      imgStyle={{ objectFit: `cover`, objectPosition: `50% 50%` }}
    />
  );
};

export default TeleventureLogo;
