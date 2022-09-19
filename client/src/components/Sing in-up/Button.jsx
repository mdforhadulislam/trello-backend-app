import React from 'react'

const Button = ({title,action}) => {
  return (
    <button
    type="submit"
    className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
    onClick={action}
>
    {title}
</button>
  )
}

export default Button