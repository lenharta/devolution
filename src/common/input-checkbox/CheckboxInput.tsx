import { CommonChangeEvent } from "../common.types";

const CheckboxInput = ({
  id = "",
  value = "default value",
  checked = false,
  onChange = (event) => console.log(event.currentTarget.value),
  disabled,
}: {
  id?: string;
  value?: string | number;
  checked?: boolean;
  onChange?: CommonChangeEvent<HTMLInputElement>;
  disabled?: boolean;
}) => {
  return (
    <input
      id={id}
      type="checkbox"
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      className="Checkbox"
    />
  );
};

export default CheckboxInput;
