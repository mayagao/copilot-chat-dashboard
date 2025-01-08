"use client";

import React from "react";
import styles from "./Tooltip.module.css";

const Tooltip = ({ content, children }) => {
  return (
    <div className={styles.tooltipWrapper}>
      {children}
      <div className={styles.tooltip}>{content}</div>
    </div>
  );
};

export default Tooltip;
