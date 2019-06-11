import React from 'react';
import classnames from 'classnames';
import styles from './tabs.module.scss';

const FundsTabs = ({ children, className }) => {
  return (
    <div
      className={classnames({
        [styles.tabsContainer]: true,
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
};

FundsTabs.displayName = 'FundTabs';
export default FundsTabs;
