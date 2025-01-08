"use client";

import { useState } from "react";
import MainLayout from "../components/MainLayout";

const OptionPage = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  return (
    <MainLayout
      isPanelVisible={isPanelVisible}
      setIsPanelVisible={setIsPanelVisible}
    />
  );
};

export default OptionPage;
