import Label from "../form/Label";
import { Paragraph } from "../typography";

const NumberInput = ({
  id,
  min,
  max,
  name,
  label,
  value,
  message,
  onChange,
}: {
  id?: string;
  min?: number;
  max?: number;
  name?: string;
  label?: string;
  value?: string;
  message?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <input
        id={id ?? ""}
        min={min ?? 0}
        max={max ?? 5000}
        name={name ?? ""}
        type="number"
        value={value ?? "value"}
        className="NumberInput NumberInput-frame"
        onChange={onChange ?? ((event) => console.log(event.target.value!))}
      />
      {label && <Label text={label ?? ""} id={id ?? ""} />}
      {message && <Paragraph text={message} variant="two" />}
    </>
  );
};

export default NumberInput;
