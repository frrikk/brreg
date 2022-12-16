export const Card = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col sm:flex-row gap-2 justify-between my-2 p-4 bg-slate-100">
      {children}
    </div>
  );
};
