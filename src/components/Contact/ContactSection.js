import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import classnames from 'classnames';
import styles from './contactSection.module.scss';
import ContactBackgroundSection from './ContactBackgroundSection';
import TeleventureIconGold from '../TeleventureIconGold';

const ContactSection = props => {
  const thisPage = React.createRef();

  const data = useStaticQuery(graphql`
    query ContactSection {
      contentfulContact {
        address
        email
        phone
        orgNr
      }
    }
  `);
  const { contentfulContact } = data;
  const { scrollToFooter } = props;
  return (
    <div ref={thisPage} className={styles.contactSection}>
      <ContactBackgroundSection className={classnames('backgroundImage')}>
        <div className="imageOverlay" />
        <div className={styles.backgroundContent}>CONTACT</div>
      </ContactBackgroundSection>
      <div className={styles.card}>
        <TeleventureIconGold className={styles.logoIcon} />
        <div className={styles.header}>CONTACT</div>
        <div className={styles.info}>TELEVENTURE MANAGEMENT AS</div>
        <div>
          <div className={styles.listItem}>
            <a
              href="https://www.google.no/search?q=televenture+capital+as+address&amp;stick=H4sIAAAAAAAAAOPgE-LWT9c3LMkpyzNOztCSzU620s_JT04syczPgzOsElNSilKLiwEziTQZLgAAAA&amp;ludocid=13011333457258383551&amp;sa=X&amp;ved=2ahUKEwiFifqPlsreAhUCWCwKHZzdBG4Q6BMwEnoECAQQAw"
              target="_blank"
              className={styles.cardKey}
              style={{ textDecoration: 'none' }}
            >
              ADDRESS:
            </a>
            &nbsp;{contentfulContact.address}
          </div>
          <div className={styles.listItem}>
            <span className={styles.cardKey}>
              EMAIL:&nbsp;
              <a href={`mailto:${contentfulContact.email}`}>{contentfulContact.email}</a>
            </span>
          </div>
          <div className={styles.listItem}>
            <span className={styles.cardKey}>TEL:&nbsp;</span>
            <a href={`tel:${contentfulContact.phone.replace(/\(|\)/g, '')}`}>{contentfulContact.phone}</a>
          </div>
          <div className={styles.listItem}>
            <span className={styles.cardKey}>ORG NR:&nbsp;</span>
            <span>{contentfulContact.orgNr}</span>
          </div>
        </div>
        <div className={styles.fillFormInfo} onClick={scrollToFooter}>
          YOU ARE WELCOME TO FILL IN OUR CONTACT FORM BELOW >
        </div>
      </div>
    </div>
  );
};

ContactSection.displayName = 'ContactSection';
export default ContactSection;
