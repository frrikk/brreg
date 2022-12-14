import * as React from "react";

export const Input = (props) => {
  const { name, id, value, onChange, placeholder } = props;

  return (
    <input
      name={name}
      id={id}
      onChange={onChange}
      value={value}
      className="p-2 border-2 sm:w-3/4 placeholder:italic placeholder:antialiased"
      placeholder={placeholder}
    />
  );
};
