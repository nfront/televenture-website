import 'babel-polyfill';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { ParallaxProvider } from 'react-scroll-parallax';
import favicon from '../images/favicon.ico';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import config from '../utils/siteConfig';
import Menu from './Menu';
import Footer from './Footer/Footer';
import SEO from './SEO';

const Layout = React.forwardRef(({ children }, footerRef) => {
  return (
    <div className="siteRoot">
      <SEO />
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href={favicon} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <div className="siteContent">
            <Menu />
            {children}
            <Footer ref={footerRef} />
          </div>
        </ParallaxProvider>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  );
});

export default Layout;
