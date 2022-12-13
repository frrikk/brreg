export const Heading = (props) => {
  const { type, children } = props;

  if (type === "h1") {
    return <h1 className="text-3xl font-semibold">{children}</h1>;
  }

  if (type === "h2") {
    return <h2 className="text-xl font-medium">{children}</h2>;
  }

  if (type === "h3") {
    return <h3 className="text-lg font-normal">{children}</h3>;
  }

  return <p>{children}</p>;
};
