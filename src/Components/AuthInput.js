import React from "react";
import { CiLock, CiUser } from "react-icons/ci";

export default function AuthInput({
  type,
  placeholder,
  label,
  setU,
  setP,
  U,
  P,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor=""
        className="font-semibold text-sm flex items-center justify-between"
      >
        {label == "Username" ? <CiUser /> : <CiLock />}
        {label}
      </label>
      <input
        className="w-full p-2 border-1p5 border-gray-300 bg-gray-100 rounded-md outline-none focus:border-gray-400 transition-all duration-150 shadow-sm"
        type={type}
        placeholder={placeholder}
        value={type === "password" ? P : U}
        required
        onChange={(e) => {
          let val = e.target.value;

          if (label == "Username") {
            setU(val);
          } else {
            setP(val);
          }
        }}
      />
    </div>
  );
}
