export const AppContainer = (props) => {
  const { children } = props;

  return (
    <div className="p-10 mx-auto h-screen max-w-screen-lg border-r-2 border-l-2 border-slate-100">
      {children}
    </div>
  );
};
