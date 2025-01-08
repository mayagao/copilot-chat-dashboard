"use client";

import React from "react";
import styles from "./InstructionPanel.module.css";

const BaseInstructionPanel = ({ children }) => {
  return <div className={styles.instructionPanel}>{children}</div>;
};

export default BaseInstructionPanel;
