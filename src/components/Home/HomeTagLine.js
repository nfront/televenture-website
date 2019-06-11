import React from 'react';
import classnames from 'classnames';
import { Parallax } from 'react-scroll-parallax';
import Background from './TitleHeaderBackground';
import TagLine from './TagLine';
import TabLinks from './TabLinks';
import styles from './homeTagLine.module.scss';

const HomeTagline = () => {
  return (
    <div className={styles.taglineContainer}>
      <Parallax y={[-120, 40]} tagOuter="figure">
        <Background className={classnames('backgroundImage', styles.tagBackground)}>
          <div className="imageOverlay dark" />
        </Background>
      </Parallax>
      <TagLine />
      <TabLinks />
    </div>
  );
};

HomeTagline.displayName = 'HomeTagline';
export default HomeTagline;
