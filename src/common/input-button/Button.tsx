import { CommonClickEvent } from "../common.types";

const Button = ({
  id = "",
  text = "Button Text",
  value = "default value",
  onClick,
  disabled = false,
}: {
  id?: string;
  text?: string;
  value?: string | number;
  onClick?: () => void | CommonClickEvent<HTMLInputElement>;
  disabled?: boolean;
}) => {
  return (
    <button
      id={id}
      value={value}
      onClick={onClick}
      disabled={disabled}
      className="Button"
    >
      {text}
    </button>
  );
};

export default Button;

/**
 * (takes data-theme-mode prop)
 *
 * Button-sizes
 * ============
 * Button-small
 * Button-medium
 * Button-large
 *
 * Button-state (data-theme-state)
 * ============
 * data-theme-state-error
 * data-theme-state-warning
 * data-theme-state-success
 *
 * Button-state (css)
 * ============
 * enabled
 * disabled
 * active
 * hover
 * focus
 * focus-visible ?
 *
 * Button-variants
 * ===============
 * Button-solid
 * Button-text
 * Button-tonal
 * Button-outlined
 */
