import React from 'react';
import { Link } from 'gatsby';
import styles from './companyDescription.module.scss';
import TeleventureLogo from '../TeleventureLogo';

const CompanyDescription = () => {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.contentWrapper}>
        <TeleventureLogo className={styles.companyLogo} />
        <div className={styles.description}>
          Televenture is an Oslo based Nordic Venture Capital firm and was established in 1993 by Rune Rinnan. During
          the period from 1993-2010, Televenture managed 8 Telenor Venture funds. In 2010, Televenture and our
          Technology Transfer Office (TTO) partners in Oslo, Bergen, and Trondheim, established Norsk
          Innovasjonskapital.
        </div>
        <h2 className={styles.navigationIcon}>
          <Link to="/about" className={styles.navigationLink}>
            &gt;&gt;
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default CompanyDescription;
