import { useEffect, useRef } from "react";
import { AppStoreObjectType } from "../../../app/local/app.types";
import Icon, { IconDataType } from "../../../assets/Icon";

const Button = ({
  id,
  type,
  icon,
  text,
  value,
  status,
  onClick,
  disabled,
}: {
  id?: string;
  type?: "submit" | "reset" | "button" | undefined;
  icon?: IconDataType;
  text?: string;
  status?: AppStoreObjectType;
  value?: string | number;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  const displayIcon = [text ?? "Button Text", <Icon name="ArrowDown" />];
  const ref = useRef<HTMLButtonElement>(null)!;

  useEffect(() => {
    ref.current?.classList[status?.error ? "add" : "remove"]("status-error");
  }, [status?.warning]);

  useEffect(() => {
    ref.current?.classList[status?.warning ? "add" : "remove"](
      "status-warning"
    );
  }, [status?.warning]);

  console.log(ref.current?.classList);

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
