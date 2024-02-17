import React, { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function Nav() {
  const user = useSelector((state) => state.user);
  const { cartSize } = useSelector((state) => state.cart);

  const [search, setSearch] = useState();

  return (
    <>
      <nav className="w-screen p-5 pt-7 bg-white border-b-1p5 border-gray-50 shadow-md flex items-center justify-evenly">
        <div className="relative">
          <CiShoppingCart size={40} />
          <p
            className="bg-theme1 shadow-md absolute -top-2 -right-2 text-xs text-white"
            style={{
              borderRadius: "50%",
              padding: "5px",
            }}
          >
            {cartSize}
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-2xl font-semibold">UrbanPulse</p>
          <form
            action={`/search/${search}`}
            className="relative flex gap-2 items-center"
          >
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="p-2 pl-6 outline-none rounded-full border-b-1p5 border-gray-200 bg-gray-50 shadow-sm hover:shadow-md focus:shadow-md transition-all duration-150"
            />
            <button className="bg-theme1 p-2 rounded-full shadow-md">
              <CiSearch color="#fff" />
            </button>
            <CiSearch className="absolute top-3 -right-0 left-1 text-gray-500" />
          </form>
        </div>
        <div className="flex gap-5 items-center">
          <img
            src={user.image}
            alt="profile picture"
            style={{
              borderRadius: "50%",
              objectFit: "contain",
              width: "4rem",
              height: "4rem",
            }}
          />
        </div>
      </nav>
    </>
  );
}
