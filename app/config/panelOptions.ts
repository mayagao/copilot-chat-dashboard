import Option1Panel from "../components/panels/Option1Panel";
import Option2Panel from "../components/panels/Option2Panel";
import Option3Panel from "../components/panels/Option3Panel";

export type PanelOption = {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType;
  defaultPanel?: boolean;
  isDefault?: boolean;
};

export const panelOptions: PanelOption[] = [
  {
    id: "option-1",
    title: "Option 1",
    description: "This is the content for option 1",
    component: Option1Panel,
    isDefault: true,
  },
  {
    id: "option-2",
    title: "Option 2",
    description: "This is the content for option 2",
    component: Option2Panel,
  },
  {
    id: "option-3",
    title: "Customize",
    component: Option3Panel,
  },
];

export const getDefaultOption = () =>
  panelOptions.find((opt) => opt.isDefault) || panelOptions[0];
