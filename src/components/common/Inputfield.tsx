import React from "react";

const Inputfield = ({
  label,
  type,
  name,
  placeholder,
  required,
  customClass,
}) => {
  return (
    <div className="w-full py-2">
      <label className="capitalize text-secondary text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${customClass} p-2 mt-2 w-full border border-catSkillWhite rounded-md focus:outline-none`}
        required={required}
      />
    </div>
  );
};

export default Inputfield;
