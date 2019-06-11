import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import classnames from 'classnames';
import BackgroundImage from 'gatsby-background-image';
import TeleventureIconGold from '../TeleventureIconGold';
import Tab from '../Tab';
import styles from './fundCards.module.scss';

const FundCards = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFunds(sort: { fields: [order] }) {
        edges {
          node {
            shortName
            fullName
            id
            background {
              fluid(quality: 70, maxWidth: 450) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  const funds = data.allContentfulFunds.edges;
  return (
    <div className={styles.fundsDetailContainer}>
      <div className={styles.cardsWrapper}>
        {funds.map(({ node: fund }, index) => {
          return (
            <Link key={`fund-${fund.id}`} to={`/Funds/${fund.shortName.replace(/\s+/g, '-')}`} className={styles.link}>
              <div className={styles.card}>
                {fund.background ? (
                  <BackgroundImage
                    Tag="div"
                    fluid={fund.background.fluid}
                    style={{ objectFit: `cover`, objectPosition: `50% 50%` }}
                    className={classnames('backgroundImage', {
                      [styles.cardBackgroundImage]: true,
                    })}
                  >
                    <div className={classnames('imageOverlay', 'mediumDark')} />
                  </BackgroundImage>
                ) : (
                  <div className={styles.backgroundDiv} />
                )}
                <div className={styles.cardInner}>
                  <div className={styles.title}>
                    <TeleventureIconGold className={styles.icon} />
                    <h2 className={styles.label}>{fund.shortName}</h2>
                    <div
                      className={classnames({
                        [styles.fundLabel]: true,
                        [styles.light]: index % 2 == 0,
                      })}
                    >
                      FUND
                    </div>
                  </div>
                </div>
                <div className={styles.hoverDiv}>
                  <h2 className={styles.fundName}>{fund.fullName}</h2>
                </div>
                <div className={styles.tabWrapper}>
                  <Tab className={styles.tabButton} slug={`/Funds/${fund.shortName.replace(/\s+/g, '-')}`}>
                    Explore {fund.shortName} Funds &gt;&gt;
                  </Tab>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FundCards;
