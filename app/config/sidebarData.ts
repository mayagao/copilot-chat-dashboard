import { CopilotIcon, GearIcon } from "@primer/octicons-react";

type ConversationItem = {
  title: string;
  tag?: string;
  icon?: React.ComponentType;
};

type SidebarSection = {
  title: string;
  items: ConversationItem[];
};

export const sidebarData: SidebarSection[] = [
  {
    title: "Recent",
    items: [
      {
        title: "General Conversation",
        tag: "@github",
        icon: CopilotIcon,
      },
      {
        title: "Core engineering",
        tag: "@coreeng",
      },
      {
        title: "Backend API",
        tag: "@backend",
      },
      {
        title: "Jira",
        tag: "@jira",
      },
      {
        title: "LaunchDarkly",
        tag: "@launchdark",
      },
      {
        title: "Manage",
        tag: "",
        icon: GearIcon,
      },
    ],
  },
  {
    title: "Today",
    items: [
      { title: "New conversation" },
      { title: "Update cta icon in search experience with new design system" },
      { title: "Fix padding on launch icon and adjust spacing in mobile view" },
      { title: "Downgrade React package" },
      { title: "Switch to React v18" },
    ],
  },
  {
    title: "Yesterday",
    items: [
      { title: "My stale pull requests" },
      {
        title: "Update cta icon in search experience and implement A/B testing",
      },
      { title: "Switch to React v18" },
      {
        title:
          "Update cta icon in search experience with accessibility improvements",
      },
      { title: "Fix padding on launch icon and implement responsive design" },
      { title: "Switch to React v18" },
    ],
  },
  {
    title: "Previous 7 days",
    items: [
      { title: "My stale pull requests from the last sprint" },
      {
        title:
          "Update cta icon in search experience and add analytics tracking",
      },
      { title: "Fix padding on launch icon and update documentation" },
    ],
  },
];
