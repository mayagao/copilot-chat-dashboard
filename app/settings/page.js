import MainLayout from "../../src/components/MainLayout";
import SettingsPanel from "../../src/components/SettingsPanel";

export default function Settings() {
  return (
    <div style={{ display: "flex" }}>
      <MainLayout />
      <SettingsPanel />
    </div>
  );
}
