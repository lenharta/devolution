import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CaretDownIcon,
  CaretsIcon,
  CaretUpIcon,
  HouseOutlinedIcon,
} from "./icons";

const iconData = {
  ArrowUp: <ArrowUpIcon />,
  ArrowDown: <ArrowDownIcon />,
  ArrowLeft: <ArrowLeftIcon />,
  ArrowRight: <ArrowRightIcon />,
  HouseOutlined: <HouseOutlinedIcon />,
  carets: <CaretsIcon />,
  caretUp: <CaretUpIcon />,
  caretDown: <CaretDownIcon />,
};

export type IconDataType = typeof iconData;
export type IconNameType = keyof IconDataType;

const Icon = ({ name = "ArrowUp" }: { name: IconNameType }) => {
  return <>{iconData[name]}</>;
};
export default Icon;
