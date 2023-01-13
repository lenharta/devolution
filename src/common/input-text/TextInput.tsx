import { $FONTVARIANT } from "../../app/types/data.types";
import { CommonChangeEvent } from "../common.types";

type TextInputType = ({
  id,
  text,
  value,
  onChange,
  placeholder,
}: {
  id?: string;
  text?: string;
  value?: string;
  infotext?: string;
  variant?: "pri" | "sec";
  onChange?: CommonChangeEvent<HTMLInputElement>;
  placeholder?: string;
}) => JSX.Element;

const TextInput: TextInputType = ({
  id,
  text = "Label",
  placeholder = "Enter Text...",
  infotext,
  onChange,
  variant = "pri",
  value,
}) => {
  return (
    <div className={`${variant}-TextInput-container`}>
      <label
        htmlFor={id}
        className="TextInput-label"
        data-font-type={$FONTVARIANT.label1}
      >
        {text}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="TextInputGroup-input"
        placeholder={placeholder}
      />
      {infotext && (
        <p
          className="TextInput-infotext"
          data-font-type={$FONTVARIANT.caption2}
        >
          {infotext}
        </p>
      )}
    </div>
  );
};

export default TextInput;
