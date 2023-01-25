import Label from "../form/Label";
import { Paragraph } from "../typography";

const CheckboxInput = ({
  id,
  label,
  value,
  message,
  checked,
  disabled,
  onChange,
}: {
  id: string;
  label: string;
  value: string | number;
  message: string;
  checked: boolean;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <input
        id={id ?? ""}
        type="radio"
        value={value ?? ""}
        checked={checked ?? false}
        disabled={disabled ?? false}
        onChange={onChange ?? ((event) => console.log(event.target.value))}
      />
      {label && <Label text={label ?? "Label"} id={id} />}
      {message && <Paragraph text={message ?? ""} variant="lead" />}
    </>
  );
};

export default CheckboxInput;
