"use client";

import { useState } from "react";
import MainLayout from "./components/MainLayout";

const Home = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  return (
    <MainLayout
      isPanelVisible={isPanelVisible}
      setIsPanelVisible={setIsPanelVisible}
    />
  );
};

export default Home;
