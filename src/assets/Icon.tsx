import {
  ArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  HouseOutlined,
  InfoOutlinedCircle,
} from "./icons";

const iconData = {
  ArrowDownRight: <ArrowDownRight />,
  ArrowDownLeft: <ArrowDownLeft />,
  ArrowDown: <ArrowDown />,
  ArrowLeft: <ArrowLeft />,
  ArrowRight: <ArrowRight />,
  ArrowUp: <ArrowUp />,
  ArrowUpLeft: <ArrowUpLeft />,
  ArrowUpRight: <ArrowUpRight />,
  HouseOutlined: <HouseOutlined />,
  InfoOutlinedCircle: <InfoOutlinedCircle />,
};

export type IconDataType = typeof iconData;
export type IconNameType = keyof IconDataType;

const Icon = ({ name = "ArrowDown" }: { name: IconNameType }) => {
  return <>{iconData[name]}</>;
};
export default Icon;
