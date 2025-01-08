"use client";

import React from "react";
import styles from "./InstructionPanel.module.css";
import BaseInstructionPanel from "./BaseInstructionPanel";

const SimpleInstructionPanel = () => {
  return (
    <BaseInstructionPanel>
      <div className={styles.section}>
        <h3>Instructions</h3>
        <textarea
          className={styles.textArea}
          placeholder="Customize your Copilot..."
        />
      </div>
      <div className={styles.section}>
        <h3>Contexts</h3>
        <div className={styles.emptyState}>
          No resources added, start by selecting a folder or file
          <button className={styles.browseButton}>Browse files</button>
        </div>
      </div>
    </BaseInstructionPanel>
  );
};

export default SimpleInstructionPanel;
