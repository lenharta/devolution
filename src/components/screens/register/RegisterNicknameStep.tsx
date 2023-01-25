import FormWrapper from "../../common/form/FormWrapper";

const RegisterNicknameStep = <Data,>({
  data,
  updateFields,
}: {
  data: Data;
  updateFields: (fields: Partial<Data>) => void;
}) => {
  return (
    <FormWrapper title="Choose Your Nickname.">
      <p>Nickname Step</p>
    </FormWrapper>
  );
};

export default RegisterNicknameStep;
