import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import styles from './menu.module.scss';
import TeleventureLogo from './TeleventureLogo';

const menuTabs = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about/',
  },
  {
    title: 'Funds',
    link: '/Funds/',
    partiallyActive: true,
  },
  {
    title: 'Investors',
    link: '/investors/',
  },
  {
    title: 'News',
    link: '/news/',
  },
  {
    title: 'Contact',
    link: '/contact/',
  },
];

const HamburgerIcon = ({ isOpen }) => {
  return (
    <div
      className={classnames({
        [styles.navIcon]: true,
        [styles.open]: isOpen,
      })}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

const DELTA = 20;

const getDocumentHeight = () => {
  const { body } = document;
  const html = document.documentElement;

  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  return height;
};

const Menu = ({ className }) => {
  const [isOpen, setOpen] = useState(false);
  const [menuClass, setMenuClass] = useState('');
  const navRef = useRef(null);
  const documentHeight = useRef(0);
  const scrollFlags = useRef({ didScroll: false, lastScrollTop: 0, navbarHeight: 0 });

  const toggleOpen = () => {
    setOpen(prevOpen => !prevOpen);
  };

  useEffect(() => {
    scrollFlags.current.navbarHeight = navRef.current.clientHeight;

    const hasScrolled = () => {
      const { lastScrollTop, navbarHeight } = scrollFlags.current;
      const st = window.scrollY;

      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= DELTA) {
        return;
      }
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        setMenuClass('navUp');
      } else if (st + window.innerHeight < documentHeight.current) {
        setMenuClass('navDown');
      }

      scrollFlags.current.lastScrollTop = st;
    };

    documentHeight.current = getDocumentHeight();
    const timer = setInterval(() => {
      if (scrollFlags.current.didScroll) {
        hasScrolled();
        scrollFlags.current.didScroll = false;
      }
    }, 400);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      scrollFlags.current.didScroll = true;
    };
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={classnames(styles.header, {
        [className]: className,
        [styles[menuClass]]: menuClass,
      })}
    >
      <div
        className={classnames({
          [styles.navbarIcon]: true,
          [styles.open]: isOpen,
        })}
        onClick={toggleOpen}
      >
        <HamburgerIcon isOpen={isOpen} />
      </div>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logoLink}>
          <TeleventureLogo className={styles.televentureLogo} />
        </Link>
        <nav
          className={classnames({
            [styles.nav]: true,
            [styles.open]: isOpen,
          })}
        >
          <div className={styles.navbar}>
            <ul className={styles.topList}>
              {menuTabs.map(tab => {
                return (
                  <li key={tab.title}>
                    <Link
                      to={tab.link}
                      activeClassName={styles.activeLink}
                      partiallyActive={Boolean(tab.partiallyActive)}
                    >
                      {tab.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
