import { useEffect, useRef } from "react";
import Icon, { IconDataType } from "../../../assets/Icon";

const Button = ({
  id,
  type,
  icon,
  text,
  value,
  error,
  warning,
  onClick,
  disabled,
}: {
  id?: string;
  type?: "submit" | "reset" | "button" | undefined;
  icon?: IconDataType;
  text?: string;
  value?: string | number;
  error?: string;
  warning?: string;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  const displayIcon = [text ?? "Button Text", <Icon name="ArrowDown" />];
  const ref = useRef<HTMLButtonElement>(null)!;

  useEffect(() => {
    ref.current?.classList[error ? "add" : "remove"]("status-error");
  }, [error]);

  useEffect(() => {
    ref.current?.classList[warning ? "add" : "remove"]("status-warning");
  }, [warning]);

  console.log(error);

  return (
    <button
      id={id ?? ""}
      ref={ref}
      type={type ?? "button"}
      value={value ?? ""}
      onClick={onClick}
      disabled={disabled ?? false}
      className="Button"
    >
      {icon ? displayIcon : text ?? "Button Text"}
    </button>
  );
};

export default Button;
