import React from 'react'

const InputBox = ({title,name,placeholder,type,action,value}) => {
  return (
    <input
    type={type}
    name={name}
    className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
    placeholder={placeholder}
    onChange={action}
    value={value}
/>
  )
}

export default InputBox