import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import classnames from 'classnames';
import { Parallax } from 'react-scroll-parallax';
import styles from './footer.module.scss';
import ContactForm from './ContactForm';
import BackgroundSection from './FooterBackground';
import TeleventureLogo from '../TeleventureLogo';

const ContactDetails = () => {
  const data = useStaticQuery(graphql`
    query ContactFooter {
      contentfulContact {
        email
        phone
      }
    }
  `);

  const { email, phone } = data.contentfulContact;
  return (
    <div className={styles.contactDetails}>
      <div className={styles.title}>Contact Us:</div>
      <div className={styles.details}>
        <div className={styles.label}>
          <span>Email:</span>
          <a href={`mailto:${email}`} target="_self" data-content={email} data-type="mail">
            {email}
          </a>
        </div>
        <div className={styles.label}>
          <span>Telephone:</span>
          <a href={`tel:${phone}`} target="_self" data-content={phone} data-type="phone">
            {phone}
          </a>
        </div>
      </div>
      <div style={{ marginTop: '16px' }} className={styles.title}>
        Making Venture Happen
      </div>
    </div>
  );
};

const activeLinkStyle = {
  color: '#D2A756',
};

const NavigationMenu = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Funds/" activeStyle={activeLinkStyle} partiallyActive>
              Funds
            </Link>
          </li>
          <li>
            <Link to="/investors/" activeStyle={activeLinkStyle}>
              Investors
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className={styles.contactContainer}>
      <Parallax className={styles.footerParallax} y={[-60, 60]} tagOuter="figure">
        <BackgroundSection
          className={classnames('backgroundImage', {
            [styles.footerBgImage]: true,
          })}
        >
          <div className="imageOverlay dark" />
        </BackgroundSection>
      </Parallax>
      <div className={styles.innerContainer}>
        <Link to="/" className={styles.logoLink}>
          <TeleventureLogo className={styles.televentureLogo} />
        </Link>
        <div className={styles.contentBox}>
          <NavigationMenu />
          <ContactDetails />
          <div className={styles.contactForm}>
            <div className={styles.title}>Contact Form:</div>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className={styles.credits}>TELEVENTURE WEBSITE By SHUBHAM KHATRI</div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
