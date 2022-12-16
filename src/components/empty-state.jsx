import { Tips } from "../assets/tips";

export const EmptyState = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col justify-center mt-20 bg-blue-50 justify-center items-center w-1/2 h-[200px] mx-auto rounded-lg p-4">
      <div className="p-4 bg-blue-100 relative bottom-4 rounded-full">
        <Tips />
      </div>
      <p className="font-semibold text-xl text-blue-900 mt-4">{children}</p>
    </div>
  );
};
