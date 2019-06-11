import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Background from './BackgroundSection';
import styles from './index.module.scss';
import InquiriesCard from './InquiriesCard';
import InvestorsTable from './Table';

const Investors = () => {
  const data = useStaticQuery(graphql`
    query InvestorPageDetails {
      contentfulInvestorsDescription {
        description {
          description
        }
      }
      allContentfulInvestorEvents {
        totalCount
        nodes {
          id
          eventName
          venue
          date
          startTime
          endTime
        }
      }
      contentfulInvestorInquiries {
        name
        designation
        email
      }
    }
  `);
  const { contentfulInvestorsDescription, allContentfulInvestorEvents, contentfulInvestorInquiries } = data;
  const { description } = contentfulInvestorsDescription;
  const { nodes: tableData } = allContentfulInvestorEvents;
  return (
    <div className={styles.investorsContainer}>
      <Background content="INVESTORS" />
      <div className={styles.description}>{description.description}</div>
      <div className={styles.tableInfo}>WE LOOK FORWARD TO MEETING INVESTORS AT THE FOLLOWING EVENTS:</div>
      <InvestorsTable tableData={tableData} />
      <InquiriesCard {...contentfulInvestorInquiries} />
    </div>
  );
};

Investors.displayName = 'InvestorsSection';
export default Investors;
