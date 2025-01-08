"use client";

import React from "react";
import styles from "./MainLayout.module.css";
import {
  MarkGithubIcon,
  CommentDiscussionIcon,
  GearIcon,
  KebabHorizontalIcon,
  XIcon,
} from "@primer/octicons-react";
import { useRouter, usePathname } from "next/navigation";
import { panelOptions, getDefaultOption } from "../config/panelOptions";
import { sidebarData } from "../config/sidebarData";
import WelcomeContent from "./WelcomeContent";
import RightPanel from "./RightPanel";
import { getPanelComponent } from "./panels";

const MainLayout = ({ children, setIsPanelVisible, isPanelVisible }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentOption =
    pathname === "/"
      ? getDefaultOption()
      : panelOptions.find((opt) => `/${opt.id}` === pathname);

  const handleOptionClick = (optionId) => {
    if (isPanelVisible) {
      setIsPanelVisible(false);
    } else {
      router.push(optionId === getDefaultOption().id ? "/" : `/${optionId}`);
      setIsPanelVisible(true);
    }
  };

  return (
    <div
      className={`${styles.container} ${
        isPanelVisible ? styles.withPanel : ""
      }`}
    >
      {/* Left Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <MarkGithubIcon size={24} />
          <span>Copilot</span>
        </div>

        <div className={styles.sidebarContent}>
          {sidebarData.map((section, index) => (
            <div key={index} className={styles.section}>
              <div className={styles.sectionTitle}>{section.title}</div>
              <ul className={styles.conversationList}>
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`${styles.conversationItem} ${
                      item.title === "New conversation" ? styles.selected : ""
                    }`}
                  >
                    {section.title === "Recent" && (
                      <div className={styles.iconCircle} />
                    )}
                    <div className={styles.conversationText}>
                      <span>{item.title}</span>
                      {item.tag && (
                        <span className={styles.conversationMeta}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.mainWrapper}>
        {/* Main Content */}
        <div
          className={`${styles.mainContent} ${
            isPanelVisible ? styles.withPanel : ""
          }`}
        >
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.headerTitle}>New conversation</div>
            </div>
            <div className={styles.headerRight}>
              <button
                className={`${styles.optionButton} ${
                  isPanelVisible ? "active" : ""
                }`}
                style={{
                  background: isPanelVisible
                    ? "var(--color-canvas-subtle)"
                    : "transparent",
                }}
                onClick={() => handleOptionClick(currentOption.id)}
              >
                <GearIcon size={16} />
              </button>
              <button className={styles.moreButton}>
                <KebabHorizontalIcon size={16} />
              </button>
            </div>
          </div>

          <div
            className={`${styles.contentArea} ${
              isPanelVisible ? styles.withPanel : ""
            }`}
          >
            <WelcomeContent />
            {children}
          </div>
        </div>

        {/* Right Panel */}
        {isPanelVisible && (
          <div className={styles.rightPanel}>
            <RightPanel
              onClose={() => setIsPanelVisible(false)}
              title={currentOption?.title || ""}
            >
              {currentOption &&
                getPanelComponent(currentOption.id) &&
                React.createElement(getPanelComponent(currentOption.id))}
            </RightPanel>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
