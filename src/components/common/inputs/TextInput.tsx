import Label from "../form/Label";
import { Paragraph } from "../typography";

const TextInput = ({
  id,
  label,
  value,
  message,
  onChange,
  placeholder,
}: {
  id?: string;
  label?: string;
  value?: string | number;
  message?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => {
  return (
    <>
      <input
        id={id ?? ""}
        type="text"
        value={value ?? ""}
        onChange={onChange ?? ((event) => console.log(event.target.value))}
        placeholder={placeholder ?? "Type Here..."}
        className="TextInput TextInput-frame"
      />
      {label && <Label id={id ?? ""} text={label ?? "Label"} />}
      {message && <Paragraph text={message ?? ""} variant="lead" />}
    </>
  );
};
export default TextInput;
