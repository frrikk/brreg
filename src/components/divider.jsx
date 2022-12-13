export const Divider = (props) => {
  const { width } = props;

  if (width === "full") {
    return <div className="-mx-10 border-b-[1px] border-slate-200 pb-4 mb-4" />;
  }
  return <div className="border-b-[1px] border-slate-200 pb-4 mb-4" />;
};
