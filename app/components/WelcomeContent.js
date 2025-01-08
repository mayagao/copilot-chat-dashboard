"use client";

import React from "react";
import styles from "./WelcomeContent.module.css";
import {
  CodeIcon,
  BookIcon,
  IssueOpenedIcon,
  CopilotIcon,
  ChevronDownIcon,
} from "@primer/octicons-react";

const WelcomeContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <CopilotIcon size={40} />
          <div className={styles.logoText}>
            <h3>Ask Copilot</h3>
            <ChevronDownIcon size={16} />
          </div>
        </div>
        <p className={styles.description}>
          Copilot is powered by AI, so mistakes are possible. Learn more about
          how Copilot chat works here. Not sure where to get started? Pick a
          common task below:
        </p>
        <div className={styles.actions}>
          <button className={styles.actionButton}>
            <CodeIcon size={16} />
            <div className={styles.buttonContent}>
              <span className={styles.buttonTitle}>Coding conventions</span>
              <span>• Generate code/test based on conventions</span>
            </div>
          </button>
          <button className={styles.actionButton}>
            <BookIcon size={16} />
            <div className={styles.buttonContent}>
              <span className={styles.buttonTitle}>Knowledge bases</span>
              <span>• Break down technical concepts, press @ to select</span>
            </div>
          </button>
          <button className={styles.actionButton}>
            <IssueOpenedIcon size={16} />
            <div className={styles.buttonContent}>
              <span className={styles.buttonTitle}>Start from an issue</span>
              <span>• Help draft a PR from an issue</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeContent;
