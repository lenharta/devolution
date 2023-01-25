import {
  BrandLogo,
  CodeSandboxLogo,
  FacebookLogo,
  GitHubLogo,
  LinkedInLogo,
  TwitterLogo,
} from "./logos";

const logoData = {
  BrandLogo: <BrandLogo />,
  CodeSandbox: <CodeSandboxLogo />,
  Facebook: <FacebookLogo />,
  GitHub: <GitHubLogo />,
  LinkedIn: <LinkedInLogo />,
  Twitter: <TwitterLogo />,
};

export type LogoDataType = typeof logoData;
export type LogoNameType = keyof LogoDataType;

const Logo = ({ name = "BrandLogo" }: { name: LogoNameType }) => {
  return <>{logoData[name]}</>;
};
export default Logo;
