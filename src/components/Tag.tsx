import React from "react";
interface ITagProps {
  children: string;
}
const Tag: React.FC<ITagProps> = ({ children }) => {
  return (
    <div className="bg-indigo-300 rounded-md px-2 py-1 text-xs">{children}</div>
  );
};

export default Tag;
