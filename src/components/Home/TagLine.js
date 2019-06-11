import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styles from './tagLine.module.scss';

const TagLine = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "Televenture_v_icon_gold.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const imageData = data.desktop.childImageSharp.fluid;
  return (
    <div className={styles.tagLineContainer}>
      <div className={styles.tagLineWrapper}>
        <Image
          fluid={imageData}
          tag="div"
          className={styles.iconImg}
          imgStyle={{ objectFit: `cover`, objectPosition: `50% 50%` }}
        />
        <div className={styles.text}>
          Making
          <span className={styles.highlight}>Venture</span>
          Happen
        </div>
      </div>
    </div>
  );
};

TagLine.displayName = 'TagLine';
export default TagLine;
