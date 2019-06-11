import React from 'react';
import HomeTagLine from './HomeTagLine';
import PortFolio from './PortFolio';
import TeamImage from './TeamImage';
import CompanyDescription from './CompanyDescription';
import FundCards from './FundCards';
import styles from './index.module.scss';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <HomeTagLine />
      <PortFolio />
      <TeamImage />
      <CompanyDescription />
      <FundCards />
    </div>
  );
};

Home.displayName = 'HomeSection';
export default Home;
