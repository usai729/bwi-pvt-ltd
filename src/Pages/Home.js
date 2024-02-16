import React, { useState } from "react";
import { useSelector } from "react-redux";
import Nav from "../Components/Nav";
import ProductCard from "../Components/ProductCard";
import banner from "../Assets/benner.jpg";

export default function Home() {
  const user = useSelector((state) => state.user);

  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  const [data, setData] = useState([]);

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col md:mr-[10vw] md:ml-[10vw] p-10 items-center gap-10">
          <img
            src={banner}
            alt=""
            className=" rounded-2xl shadow-md"
            style={{
              objectFit: "contain",
              objectPosition: "center",
              maxWidth: "50em",
            }}
          />
          <div className="flex flex-col gap-1 items-center justify-center p-2 shadow-md rounded-lg">
            <p className="font-semibold text-sm">Filter</p>
            <div className="flex gap-2 items-center">
              <select
                name=""
                id=""
                className="outline-none border-1p5 border-gray-200 p-2 rounded-md"
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
              >
                <option value={0}>0</option>
                <option value={100}>100</option>
                <option value={200}>200</option>
                <option value={300}>300</option>
                <option value={400}>400</option>
                <option value={500}>500</option>
                <option value={600}>600</option>
                <option value={undefined} selected>
                  Any
                </option>
              </select>
              <p>-To-</p>
              <select
                name=""
                id=""
                className="outline-none border-1p5 border-gray-200 p-2 rounded-md"
                onChange={(e) => {
                  setTo(e.target.value);
                }}
              >
                <option value={0}>0</option>
                <option value={100}>100</option>
                <option value={200}>200</option>
                <option value={300}>300</option>
                <option value={400}>400</option>
                <option value={500}>500</option>
                <option value={600}>600</option>
                <option value={undefined} selected>
                  Any
                </option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-content-center p-3 border-1p5 border-gray-200 bg-white rounded-md">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}
