export const Label = (props) => {
  const { labelText, htmlFor, id } = props;
  return (
    <label htmlFor={htmlFor} id={id}>
      {labelText}
    </label>
  );
};
