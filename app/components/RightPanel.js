"use client";

import React from "react";
import styles from "./RightPanel.module.css";
import { XIcon, ChevronDownIcon } from "@primer/octicons-react";

const RightPanel = ({ onClose, title, children, onSave }) => {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h2>Customize Copilot</h2>
        <button onClick={onClose} className={styles.closeButton}>
          <XIcon size={16} />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          Set up Copilot to match your workflows and preferences. Want separate
          settings for different projects? Save as{" "}
          <a href="#">Custom Copilot</a>.
        </div>
        {children}
      </div>
      <div className={styles.footer}>
        <button className={styles.cancelButton} onClick={onClose}>
          Cancel
        </button>
        <button className={styles.saveButton} onClick={onSave}>
          Save
          <ChevronDownIcon size={12} />
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
