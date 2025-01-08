"use client";

import React from "react";
import styles from "./InstructionPanel.module.css";
import BaseInstructionPanel from "./BaseInstructionPanel";

const AdvancedInstructionPanel = () => {
  return (
    <BaseInstructionPanel>
      <div className={styles.section}>
        <h3>Instructions</h3>
        <div className={styles.roleInput}>
          <div className={styles.roleLabel}>[ROLE]</div>
          <textarea
            className={styles.textArea}
            defaultValue="You are a GraphQL expert..."
          />
        </div>
        <div className={styles.helpSection}>
          <div className={styles.helpIcon}>💡</div>
          <div>
            <h4>Write effective instructions</h4>
            <p>Be clear, concise, and specific. You can structure based on:</p>
            <ol>
              <li>Role: Define the assistant's expertise and tone.</li>
              <li>Knowledge: Provide guidance for routing queries.</li>
              <li>Workflows: Include examples or steps for task handling.</li>
            </ol>
          </div>
        </div>
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

export default AdvancedInstructionPanel;
