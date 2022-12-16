export const Button = (props) => {
  const { text, onClick, disabled, onSubmit } = props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onSubmit={onSubmit}
      className="py-2 border-2 border-slate-700 px-4 bg-slate-700 text-white flex-1"
    >
      {text}
    </button>
  );
};
