import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import styles from "./tab.module.scss";

const Tab = ({ slug, className, children }) => {
  return (
    <div
      className={classnames({
        [styles.tabPill]: true,
        [className]: className
      })}
    >
      <Link className={styles.tabLink} to={slug}>
        {children}
      </Link>
    </div>
  );
};
Tab.displayName = "Tab";
export default Tab;
