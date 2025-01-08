"use client";

import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  LightBulbIcon,
} from "@primer/octicons-react";
import styles from "./Option1Panel.module.css";

const Option1Panel = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [instructions, setInstructions] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.label}>Instructions</div>
      <p className="color-fg-muted mb-2">
        Define Copilot's role, expertise, and communication style. Standardize
        workflows for tasks like issue management and PR reviews.
      </p>
      <textarea
        className={styles.input}
        rows="6"
        value={instructions}
        placeholder="Enter instructions ..."
        onChange={(e) => setInstructions(e.target.value)}
      />
      {/* <div
        style={{ backgroundColor: "var(--color-canvas-subtle)" }}
        className="mt-1 rounded-2"
      >
        <button
          className="d-flex flex-items-center width-full btn-link px-2 py-2"
          style={{ fontWeight: "var(--base-text-weight-medium)" }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="d-flex flex-items-center flex-auto ">
            <LightBulbIcon className="mr-2 color-fg-muted" />
            <span className="fw-bold color-fg-default">
              Write effective prompts
            </span>
          </div>
          {isExpanded ? (
            <ChevronUpIcon className="color-fg-muted" />
          ) : (
            <ChevronDownIcon className="color-fg-muted" />
          )}
        </button>

        {isExpanded && (
          <div className="px-2 pb-3 color-fg-muted">
            <p className="mb-2">
              Be clear, concise, and specific, can include:
            </p>
            <ol className="ml-4">
              <li>
                Role: Define the assistant's role, expertise, language, and
                communication styles.
              </li>
              <li>
                Knowledge: Maps user questions to specific repository resources.
              </li>
              <li>
                Workflows: Standardize common tasks like issue management, PR
                review...
              </li>
            </ol>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Option1Panel;
