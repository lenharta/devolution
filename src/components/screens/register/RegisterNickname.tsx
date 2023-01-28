import { RegisterStepProps } from "../../../routes/Register";
import FormWrapper from "../../common/form/FormWrapper";
import TextInput from "../../common/inputs/TextInput";

export const RegisterNickname = ({ data, updateFields }: RegisterStepProps) => {
  return (
    <FormWrapper title="Choose a nickname.">
      <TextInput
        value={data.nickname}
        onChange={(event) => updateFields({ nickname: event.target.value })}
        placeholder="Ex. username1234"
      />
    </FormWrapper>
  );
};
export default RegisterNickname;
