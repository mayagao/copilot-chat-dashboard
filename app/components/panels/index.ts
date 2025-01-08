import { ComponentType } from "react";
import { panelOptions } from "../../config/panelOptions";

// Import all panel components
import Option1Panel from "./Option1Panel";
import Option2Panel from "./Option2Panel";

// Define a type for panel components
export type PanelComponent = ComponentType<{}>;

// Create a map of panel IDs to their components
export const panels: Record<string, PanelComponent> = {
  "option-1": Option1Panel,
  "option-2": Option2Panel,
};

// Helper function to get panel component by ID
export const getPanelComponent = (id: string): PanelComponent | null => {
  const option = panelOptions.find((opt) => opt.id === id);
  if (!option) return null;

  // Use the panel component if defined, otherwise use default
  return panels[id] || panels[option.defaultPanel] || null;
};
