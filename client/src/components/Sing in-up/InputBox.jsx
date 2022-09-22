import React from "react";

const InputBox = ({
  title,
  name,
  placeholder,
  type,
  action,
  value,
  styles,
}) => {
  return (
    <span class="flex shadow-md  shadow-[#e9e9e9]  mb-5 text-xs">
      <span class="bg-[#3056d3] w-32 text-center text-base text-gray-200 p-3 px-5 rounded-l">
        {placeholder}
      </span>
      <input
        class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full border "
        type={type}
        name={name}
        placeholder=""
        style={styles}
        onChange={action}
        value={value}
      />
    </span>
  );
};

export default InputBox;
