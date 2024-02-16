import React from "react";

export default function Alert({ text }) {
  return (
    <div className="w-full flex items-center p-2 rounded-md bg-red-400 text-white font-semibold">
      {text}
    </div>
  );
}
