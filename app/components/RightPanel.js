"use client";

import React from "react";
import styles from "./RightPanel.module.css";
import { XIcon, ChevronDownIcon, PlusCircleIcon } from "@primer/octicons-react";

const RightPanel = ({ onClose, title, children, onSave }) => {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Customize</h2>
        <button className={styles.cancelButton} onClick={onClose}>
          Cancel
        </button>
        <button className={styles.saveButton} onClick={onSave}>
          Save
          <ChevronDownIcon size={12} />
        </button>
        {/* <button onClick={onClose} className={styles.closeButton}>
          <XIcon size={16} />
        </button> */}
      </div>
      <div className={styles.content}>
        {/* <div className={styles.description}>
          Set up Copilot to match your workflows and preferences. Want separate
          settings for different projects? Save as{" "}
          <a href="#" className="link-secondary">
            Custom Copilot
          </a>
          .
        </div> */}
        {children}
        <div>
          <label className={styles.label}>Resources</label>
          <p className="color-fg-muted mb-2">
            Contexts, documents, or repositories that Copilot can use to give
            more accurate and relevant answers.
          </p>
          <div className="border rounded-2">
            <div className="d-flex color-bg-subtle  border-bottom px-3 py-2 color-fg-muted f6">
              <div style={{ width: "40%" }}>Name</div>
              <div style={{ width: "60%" }}>When to use</div>
            </div>
            <div className="px-3 py-3 color-fg-muted text-center">
              No resources added
            </div>
          </div>
          <button className="btn mt-2 d-inline-flex flex-items-center">
            <PlusCircleIcon className="mr-2" />
            Add new
          </button>
        </div>
      </div>

      {/* <div className={styles.footer}>
       
      </div> */}
    </div>
  );
};

export default RightPanel;
