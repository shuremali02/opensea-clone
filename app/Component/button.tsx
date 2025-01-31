import React from "react";

export interface Type {
    text:string,icon:string
}
const Button = ({text,icon}:Type) => {
  return (
    <div className="group relative">
      <button className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500">
       {icon}
      </button>
      <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white text-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">{text}<span>
        </span></span></div>
  );
}

export default Button;

