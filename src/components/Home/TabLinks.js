import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Tabs from '../Tabs';
import Tab from '../Tab';
import styles from './tabLinks.module.scss';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "V_CIRCLE_blue_televenture.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 40) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const iconData = data.desktop.childImageSharp.fluid;
  return (
    <div className={styles.tabLinkContainer}>
      <Tabs>
        <Tab slug="/about/">
          <div className={styles.tabContent}>
            <Image
              tag="div"
              fluid={iconData}
              className={styles.iconImage}
              imgStyle={{ objectFit: `cover`, objectPosition: `50% 50%` }}
            />
            <div className={styles.tabText}>ABOUT</div>
          </div>
        </Tab>
        <Tab slug="/Funds/">
          <div className={styles.tabContent}>
            <Image
              tag="div"
              fluid={iconData}
              className={styles.iconImage}
              imgStyle={{ objectFit: `cover`, objectPosition: `50% 50%` }}
            />
            <div className={styles.tabText}>FUNDS</div>
          </div>
        </Tab>
        <Tab slug="/news/">
          <div className={styles.tabContent}>
            <Image
              tag="div"
              fluid={iconData}
              className={styles.iconImage}
              imgStyle={{ objectFit: `cover`, objectPosition: `50% 50%` }}
            />
            <div className={styles.tabText}>NEWS</div>
          </div>
        </Tab>
        <Tab slug="/contact/">
          <div className={styles.tabContent}>
            <Image
              tag="div"
              fluid={iconData}
              className={styles.iconImage}
              imgStyle={{ objectFit: `cover`, objectPosition: `50% 50%` }}
            />
            <div className={styles.tabText}>CONTACT</div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
