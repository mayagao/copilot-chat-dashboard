import { ComponentType } from "react";
import { panelOptions } from "../../config/panelOptions";

// Import all panel components
import Option1Panel from "./Option1Panel";
import Option2Panel from "./Option2Panel";
import Option3Panel from "./Option3Panel";

// Define a type for panel components
export type PanelComponent = ComponentType<{}>;

// Create a map of panel IDs to their components
export const panels: Record<string, PanelComponent> = {
  "option-1": Option1Panel,
  "option-2": Option2Panel,
  "option-3": Option3Panel,
};

// Helper function to get panel component by ID
export const getPanelComponent = (id: string): PanelComponent | null => {
  switch (id) {
    case "option-1":
      return panels["option-1"];
    case "option-2":
      return panels["option-2"];
    case "option-3":
      return panels["option-3"];
    default:
      return null;
  }
};
