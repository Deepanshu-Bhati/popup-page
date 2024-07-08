import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  setitem: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({ label, placeholder, setitem }) => {
  return (
    <div className="mt-3 ml-5">
      <label className="m-3 block text-2xl" htmlFor={label}>
        {label}
      </label>
      <input
        type="text"
        className="border-4 rounded-xl p-4"
        placeholder={placeholder}
        onChange={(e) => setitem(e.target.value)}
        id={label}
      />
    </div>
  );
};

export default Input;
