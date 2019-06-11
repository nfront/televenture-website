import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const TeleventureIcon = ({ className, children, style, tag = 'div' }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "V_CIRCLE_televenture.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 100) {
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
    />
  );
};

export default TeleventureIcon;
