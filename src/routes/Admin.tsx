import Icon from "../assets/Icon";
import Logo from "../assets/Logo";
import { Headline } from "../components/common";

const featureLookup = {
  appLogos: [
    { key: "GitHub-logo", value: <Logo name="GitHub" /> },
    { key: "Brand-logo", value: <Logo name="BrandLogo" /> },
    { key: "Twitter-logo", value: <Logo name="Twitter" /> },
    { key: "Facebook-logo", value: <Logo name="Facebook" /> },
    { key: "LinkedIn-logo", value: <Logo name="LinkedIn" /> },
    { key: "Codesandbox-logo", value: <Logo name="CodeSandbox" /> },
  ],
  appIcons: [
    { key: "ArrowUp-icon", value: <Icon name="ArrowUp" /> },
    { key: "ArrowDown-icon", value: <Icon name="ArrowDown" /> },
    { key: "ArrowLeft-icon", value: <Icon name="ArrowLeft" /> },
    { key: "ArrowRight-icon", value: <Icon name="ArrowRight" /> },
    { key: "HouseOutlined-icon", value: <Icon name="HouseOutlined" /> },
  ],
  appSurfaces: [
    { key: "Primary-surface-00", value: "ps-00" },
    { key: "Primary-surface-01", value: "ps-01" },
    { key: "Primary-surface-02", value: "ps-02" },
    { key: "Primary-surface-03", value: "ps-03" },
    { key: "Primary-surface-04", value: "ps-04" },
    { key: "Secondary-surface-00", value: "ss-00" },
    { key: "Secondary-surface-01", value: "ss-01" },
    { key: "Secondary-surface-02", value: "ss-02" },
    { key: "Secondary-surface-03", value: "ss-03" },
    { key: "Secondary-surface-04", value: "ss-04" },
  ],
  appFontSizes: [
    { key: "Font-size-01", value: "fs-01" },
    { key: "Font-size-02", value: "fs-02" },
    { key: "Font-size-03", value: "fs-03" },
    { key: "Font-size-04", value: "fs-04" },
    { key: "Font-size-05", value: "fs-05" },
    { key: "Font-size-06", value: "fs-06" },
    { key: "Font-size-07", value: "fs-07" },
    { key: "Font-size-08", value: "fs-08" },
    { key: "Font-size-09", value: "fs-09" },
    { key: "Font-size-10", value: "fs-10" },
    { key: "Font-size-11", value: "fs-11" },
    { key: "Font-size-12", value: "fs-12" },
  ],
  appFontWeights: [
    { key: "Airbnb-cereal-BLACK", value: "ff-black" },
    { key: "Airbnb-cereal-BOLD", value: "ff-bold" },
    { key: "Airbnb-cereal-MEDIUM", value: "ff-medium" },
    { key: "Airbnb-cereal-REGULAR", value: "ff-regular" },
    { key: "Airbnb-cereal-LIGHT", value: "ff-light" },
  ],
  appButtonVariants: [
    { key: "Default Button", value: "default" },
    { key: "Disabled Button", value: "disabled" },
    { key: "Action Button", value: "action" },
    { key: "Secondary Button", value: "secondary" },
    { key: "Action-Secondary Button", value: "action-secondary" },
  ],
  appButtonStatus: [
    { key: "Help Button", value: "status-help" },
    { key: "Error Button", value: "status-error" },
    { key: "Misuse Button", value: "status-misuse" },
    { key: "Warning Button", value: "status-warning" },
    { key: "Success Button", value: "status-success" },
  ],
};

const Admin = () => {
  return (
    <div className="Admin">
      <Headline text="Elements" variant="section" />

      <div className="Admin-display"></div>
    </div>
  );
};
export default Admin;
