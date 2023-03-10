import Label from "../form/Label";
import { Paragraph } from "../typography";

const RadioInput = ({
  id,
  value,
  label,
  message,
  groupId,
  checked,
  disabled,
  onChange,
}: {
  id?: string;
  value?: string | number;
  label?: string;
  message?: string;
  groupId?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <input
        id={id ?? ""}
        type="radio"
        value={value ?? ""}
        checked={checked ?? false}
        disabled={disabled ?? false}
        radioGroup={groupId ?? ""}
        className="RadioInput"
        onChange={onChange ?? ((event) => console.log(event.target.value))}
      />
      {label && <Label id={id ?? ""} text={label} />}
      {message && <Paragraph text={message ?? ""} variant="lead" />}
    </>
  );
};

export default RadioInput;
