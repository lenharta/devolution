import { useRef } from "react";
import { STATUSTYPE } from "../../../app/local/app.types";
import { THEMESTOREOBJECTTYPE } from "../../../app/theme/theme.types";
import Icon, { IconNameType } from "../../../assets/Icon";

type ButtonVariantType =
  | "default"
  | "action"
  | "action-secondary"
  | "secondary";

const Button = ({
  id,
  type,
  icon,
  text,
  value,
  status,
  variant,
  onClick,
  disabled,
}: {
  id?: string;
  type?: "submit" | "reset" | "button" | undefined;
  icon?: IconNameType;
  text?: string;
  value?: string | number;
  status?: STATUSTYPE;
  accent?: THEMESTOREOBJECTTYPE["accent"];
  variant?: ButtonVariantType;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  const textElement = (
    <p className="fs-04 ff-medium">{text ?? "Button Text"}</p>
  );
  const displayWithIcon = [textElement, <Icon name="ArrowDown" />];
  const ref = useRef<HTMLButtonElement>(null)!;
  const buttonVariant = `Button-${variant ?? "default"}`;
  const buttonStatus = `Button-${status ?? "status-idle"}`;

  return (
    <button
      id={id ?? ""}
      ref={ref}
      type={type ?? "button"}
      value={value ?? ""}
      onClick={onClick}
      disabled={disabled ?? false}
      className={`Button ${buttonVariant} ${buttonStatus}`}
    >
      {icon ? displayWithIcon : textElement}
    </button>
  );
};

export default Button;
