export const Text = (props) => {
  const { size, children } = props;

  if (size === "sm") return <p className="text-sm">{children}</p>;

  if (size === "md") return <p className="text-md">{children}</p>;

  if (size === "lg") return <p className="text-lg">{children}</p>;

  return <p>{children}</p>;
};
