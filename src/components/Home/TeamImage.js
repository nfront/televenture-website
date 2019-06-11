import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import classnames from 'classnames';
import BackgroundImage from 'gatsby-background-image';
import { Parallax } from 'react-scroll-parallax';
import styles from './teamImage.module.scss';

const TeamImage = ({ className, children, style, tag = 'section', backgroundColor = '#040e18' }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "Televenture-76.jpg" }) {
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
    <Parallax y={[-50, 40]} tagOuter="figure" className={styles.teamImageWrapper}>
      <BackgroundImage
        Tag={tag}
        style={{ objectFit: `cover`, objectPosition: `50% 50%`, ...style }}
        className={classnames('teamImage', { [styles.teamImage]: true })}
        fluid={imageData}
        backgroundColor={backgroundColor}
      >
        <div className="imageOverlay dark" />
      </BackgroundImage>
    </Parallax>
  );
};

export default TeamImage;
