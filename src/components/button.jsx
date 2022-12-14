export const Button = (props) => {
  const { text, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="py-2 border-2 border-slate-700 px-4 bg-slate-700 text-white"
    >
      {text}
    </button>
  );
};
