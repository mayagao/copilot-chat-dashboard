"use client";

import React, { useState, useRef } from "react";
import {
  XIcon,
  SyncIcon,
  PlusIcon,
  LightBulbIcon,
} from "@primer/octicons-react";
import Tooltip from "../Tooltip";
import styles from "./Option3Panel.module.css";

const ALL_SNIPPETS = [
  {
    id: "role",
    label: "Role",
    tooltip: "Role, domain, style, and focus areas.",
    text: "[ROLE & EXPERTISE]\nYou are a [role type] specializing in [domain/framework] patterns. Focus on teaching through [style], emphasizing [key areas].\n\n",
  },
  {
    id: "style",
    label: "Style",
    tooltip: "Style, tone, and output format.",
    text: "[STYLE]\nUse [language] with [tone type] style. For output follow this [format].\n\n",
  },
  {
    id: "knowledge",
    label: "Knowledge",
    tooltip: "Maps user questions to specific resources.",
    text: '[KNOWLEDGE]\n1. Sequential: Step-by-step workflow\n"1. First [condition] 2. Then check [resource] for..."\n\n2. Routing: Direct task handling\n"If [condition] → use [resource]"\n\n',
  },
  {
    id: "issues",
    label: "Issues",
    tooltip: "Issue and project management.",
    text: "[ISSUE MANAGEMENT]\nTag <@extension> when asked to create new issues. Always add progress/blockers defined in <location>.\n\n",
  },
  {
    id: "pr",
    label: "Code Review",
    tooltip: "Code review process.",
    text: "[PR & REVIEW]\nEnsure consistency with <patterns>, run CI tests via <@GitHub Actions>, and tag @GitHub reviewers.\n\n",
  },
  {
    id: "bugs",
    label: "Debug",
    tooltip: "Bug fixing process.",
    text: "[BUG HANDLING]\nTest fixes in staging via <@extension> and document resolutions in <location>.\n\n",
  },
  // Easy to add more snippets here
];

const VISIBLE_COUNT = 3;

const Option3Panel = () => {
  const [instructions, setInstructions] = useState("");
  const [usedSnippets, setUsedSnippets] = useState(new Set());
  const [isFocused, setIsFocused] = useState(false);
  const [showAllSnippets, setShowAllSnippets] = useState(false);
  const [wasCleared, setWasCleared] = useState(false);
  const [hideAllPills, setHideAllPills] = useState(false);
  const textareaRef = useRef(null);

  const insertSnippet = (snippet) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const after = text.substring(end);

    const newText = before + snippet.text + after;
    setInstructions(newText);
    setUsedSnippets(new Set([...usedSnippets, snippet.id]));
    setShowAllSnippets(true);
    setHideAllPills(false);
    setWasCleared(false);

    // Calculate the start and end positions of inserted text
    const insertStart = start;
    const insertEnd = start + snippet.text.length;

    setTimeout(() => {
      textarea.focus();

      // Set selection to highlight inserted text
      textarea.setSelectionRange(insertStart, insertEnd);

      // Calculate scroll position to ensure inserted text is visible
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
      const textBeforeInsert = newText.substring(0, insertStart);
      const linesBeforeInsert = textBeforeInsert.split("\n").length;

      // Calculate target scroll position
      const targetScroll = (linesBeforeInsert - 2) * lineHeight; // -2 to show some context above

      // Smoothly scroll to the inserted text
      textarea.scrollTop = Math.max(0, targetScroll);
    }, 0);
  };

  const resetToInitial = () => {
    setUsedSnippets(new Set());
    setShowAllSnippets(false);
    setWasCleared(false);
    setHideAllPills(false);
  };

  const handleClear = () => {
    setWasCleared(true);
    setHideAllPills(true);
  };

  // Modified filtering logic to always show only 3 snippets
  const availableSnippets = ALL_SNIPPETS.filter(
    (snippet) => !usedSnippets.has(snippet.id)
  ).slice(0, VISIBLE_COUNT);

  const allSnippetsUsed = usedSnippets.size === ALL_SNIPPETS.length;
  const hasUsedSnippets = usedSnippets.size > 0;
  const showResetButton = hasUsedSnippets && !allSnippetsUsed;
  const showLightbulb = wasCleared || allSnippetsUsed;

  return (
    <div>
      <div className={styles.label}>Instructions</div>
      <p className="color-fg-muted mb-2">
        Set up Copilot to match your workflows and preferences. Want separate
        settings for different projects? Save as Custom Copilot.
      </p>
      <div className={styles.textareaWrapper}>
        <textarea
          ref={textareaRef}
          className={styles.input}
          rows="6"
          value={instructions}
          placeholder="Customize your Copilot..."
          onChange={(e) => setInstructions(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            if (!e.relatedTarget?.closest(`.${styles.actionStrip}`)) {
              setIsFocused(false);
            }
          }}
        />
        <div className={styles.actionStrip}>
          {!hideAllPills && (
            <div className={styles.snippetPills}>
              {availableSnippets.map((snippet) => (
                <Tooltip key={snippet.id} content={snippet.tooltip}>
                  <button
                    className={styles.pill}
                    onClick={() => insertSnippet(snippet)}
                  >
                    <PlusIcon className="color-fg-muted" size={14} />
                    <span>{snippet.label}</span>
                  </button>
                </Tooltip>
              ))}
            </div>
          )}
          {!showLightbulb && (
            <div className={styles.actionButtons}>
              {showResetButton && !hideAllPills && (
                <Tooltip content="Reset">
                  <button
                    onClick={resetToInitial}
                    className={`${styles.iconButton} ${styles.hidden} ${
                      isFocused ? styles.visible : ""
                    }`}
                    tabIndex={isFocused ? 0 : -1}
                  >
                    <SyncIcon size={14} />
                  </button>
                </Tooltip>
              )}
              {!showLightbulb && (
                <Tooltip content="Hide templates">
                  <button
                    onClick={handleClear}
                    className={styles.iconButton}
                    tabIndex={0}
                  >
                    <XIcon size={14} />
                  </button>
                </Tooltip>
              )}
            </div>
          )}
          {showLightbulb && (
            <div className={styles.cornerButtonContainer}>
              <Tooltip content="Show prompt templates">
                <button
                  onClick={resetToInitial}
                  className={styles.iconButton}
                  tabIndex={0}
                >
                  <LightBulbIcon size={14} />
                </button>
              </Tooltip>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Option3Panel;
