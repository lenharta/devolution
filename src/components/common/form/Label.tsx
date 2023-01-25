const Label = ({ id, text }: { id: string; text: string }) => {
  return (
    <label className="fs-06 ff-regular" htmlFor={id}>
      {text}
    </label>
  );
};

export default Label;
