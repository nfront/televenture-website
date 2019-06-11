import React from 'react';
import styles from './index.module.scss';
import InvestorImage from './InvestorImage';

const InquiriesCard = props => {
  const { name, email, designation } = props;
  return (
    <div className={styles.investorQueriesContainer}>
      <div className={styles.box}>
        <InvestorImage className={styles.investorImage} />
        <div className={styles.detailsSection}>
          <div className={styles.header}>INVESTOR INQUIRIES</div>
          <div className={styles.details}>
            Outside the scheduled events, shareholders and other stakeholders are welcome to contact&nbsp;
            <a href={`mailto:${email}`}>{name}</a>
            {`, ${designation} for any inquiries.`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiriesCard;
