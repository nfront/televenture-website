import React from 'react';
import Card from './Card';
import styles from './fundDetails.module.scss';

const FundDetails = ({ funds }) => {
  return (
    <div className={styles.fundContainer}>
      {funds.map(fund => {
        return <Card key={fund.node.id} details={fund.node} />;
      })}
    </div>
  );
};

FundDetails.displayName = 'FundDetails';
export default FundDetails;
