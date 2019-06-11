import React from 'react';
import classNames from 'classnames';
import Plx from 'react-plx';
import TeleventureIcon from '../TeleventureIcon';
import styles from './index.module.scss';

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 1.3,
        property: 'scale',
      },
    ],
  },
];

const WithBackgroundCover = (Background, displayName) => {
  const coverComponent = props => {
    const { content, overlayDark = true, ...rest } = props;
    return (
      <div className={styles.withBackgroundCover}>
        <div className={styles.bgInner}>
          <Plx parallaxData={parallaxData}>
            <Background {...rest} className={classNames('backgroundImage', styles.investorBackground)}>
              <div className={classNames('imageOverlay', { dark: overlayDark })} />
            </Background>
          </Plx>
        </div>
        <div className={styles.imageContent}>{content}</div>
        <TeleventureIcon style={{ position: 'absolute' }} className={styles.televentureIcon} />
      </div>
    );
  };
  coverComponent.displayName = displayName;
  return coverComponent;
};

export default WithBackgroundCover;
