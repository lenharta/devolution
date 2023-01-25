import Icon, { IconDataType } from "../../../assets/Icon";

const Button = ({
  id,
  type,
  icon,
  text,
  value,
  onClick,
  disabled,
}: {
  id?: string;
  type?: "submit" | "reset" | "button" | undefined;
  icon?: IconDataType;
  text?: string;
  value?: string | number;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  const displayIcon = [text, <Icon name="ArrowDown" />];

  return (
    <button
      id={id ?? ""}
      type={type ?? "button"}
      value={value ?? ""}
      onClick={onClick}
      disabled={disabled ?? false}
    >
      {icon ? displayIcon : text}
    </button>
  );
};

export default Button;
