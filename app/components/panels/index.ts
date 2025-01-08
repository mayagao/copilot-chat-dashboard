import { ComponentType } from "react";
import { panelOptions, PanelOption } from "../../config/panelOptions";

// Import all panel components
import Option1Panel from "./Option1Panel";
import Option2Panel from "./Option2Panel";
import Option3Panel from "./Option3Panel";

export type { PanelOption };
export { Option1Panel, Option2Panel, Option3Panel };

// Export the panel options
export { panelOptions };

// Define the getPanelComponent function
export const getPanelComponent = (id: string) => {
  switch (id) {
    case "option-1":
      return Option1Panel;
    case "option-2":
      return Option2Panel;
    case "option-3":
      return Option3Panel;
    default:
      return null;
  }
};

// Ensure it's exported
