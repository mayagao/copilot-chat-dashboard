import { Option1Panel } from "../components/panels/Option1Panel";
import { Option2Panel } from "../components/panels/Option2Panel";
import { Option3Panel } from "../components/panels/Option3Panel";

export type PanelOption = {
  id: string;
  title: string;
  description: string;
  component: () => JSX.Element;
};

export const PANEL_OPTIONS: PanelOption[] = [
  {
    id: "option-1",
    title: "Chat",
    description: "Start chatting with Copilot",
    component: Option1Panel,
  },
  {
    id: "option-2",
    title: "Ask",
    description: "Ask Copilot a question",
    component: Option2Panel,
  },
  {
    id: "option-3",
    title: "Customize",
    description: "Customize Copilot's behavior",
    component: Option3Panel,
  },
];

export const getDefaultOption = () =>
  PANEL_OPTIONS.find((opt) => opt.isDefault) || PANEL_OPTIONS[0];
