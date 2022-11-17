import React, { useState } from "react";

interface IAddTagProps {
  addTag(name: string): void;
}

const AddTag: React.FC<IAddTagProps> = (props) => {
  const { addTag } = props;

  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTag(value);
      setValue('');
    }
  };

  return (
    <input
      className="px-1 border rounded-md"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
};

export default AddTag;
