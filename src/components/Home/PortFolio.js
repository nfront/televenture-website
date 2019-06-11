import React from 'react';
import classnames from 'classnames';
import BackgroundSection from '../Contact/ContactBackgroundSection';
import styles from './portFolio.module.scss';
import TeleventureLogo from '../TeleventureLogo';
import TeleventureIcon from '../TeleventureIcon';

const PortFolio = () => {
  return (
    <div className={styles.portFolioContainer}>
      <BackgroundSection className={('backgroundImage', styles.portFolioBackground)}>
        <div className={classnames('imageOverlay', 'green')} />
      </BackgroundSection>
      <div className={styles.backgroundTriangle} />
      <div className={styles.contentWrapper}>
        <TeleventureLogo className={styles.logo} />
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.contentDescription}>
              Televenture is one of the leading venture capital companies in Norway. Televenture currently manages an
              extensive portfolio of companies focusing on:
            </div>
            <div className={styles.fields}>
              <p className={styles.titleField}>INDUSTRIALS / SOFTWARE</p>
              <p className={styles.titleField}>OIL & GAS​ / CONSUMER</p>
              <p className={styles.titleField}>Marine</p>
            </div>
          </div>
        </div>
        <TeleventureIcon className={styles.logoIcon} />
      </div>
    </div>
  );
};

export default PortFolio;
