export const VerticalSpacer = (props) => {
  const { space } = props;

  if (space === "sm") return <div className="my-4" />;

  if (space === "md") return <div className="my-6" />;

  if (space === "lg") return <div className="my-8" />;

  return <div className="my-2" />;
};
