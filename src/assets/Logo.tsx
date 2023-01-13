import {
  Brand,
  CodeSandbox,
  Facebook,
  Github,
  LinkedIn,
  Twitter,
} from "./logos";

const logoData = {
  Brand: <Brand />,
  CodeSandbox: <CodeSandbox />,
  Facebook: <Facebook />,
  Github: <Github />,
  LinkedIn: <LinkedIn />,
  Twitter: <Twitter />,
};

export type LogoDataType = typeof logoData;
export type LogoNameType = keyof LogoDataType;

const Logo = ({ name = "Brand" }: { name: LogoNameType }) => {
  return <>{logoData[name]}</>;
};
export default Logo;
