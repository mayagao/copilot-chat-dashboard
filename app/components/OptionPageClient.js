"use client";

import React, { useState } from "react";
import MainLayout from "./MainLayout";
import RightPanel from "./RightPanel";

export default function OptionPageClient({ optionId }) {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  return (
    <div className="layout-wrapper">
      <MainLayout setIsPanelVisible={setIsPanelVisible} />
      {isPanelVisible && (
        <RightPanel
          optionId={optionId}
          onClose={() => setIsPanelVisible(false)}
        />
      )}
      <style jsx>{`
        .layout-wrapper {
          position: relative;
        }
      `}</style>
    </div>
  );
}
