import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/cartSlice";

export default function ProductCard({ brand, title, image, price }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: 1 }));
  };

  return (
    <>
      <div className="flex flex-col gap-3 p-4 shadow-sm border-1p5 border-gray-200 rounded-md min-w-[20vw] max-w-[20vw] min-h-[50vh] max-h-[50vh]">
        <p className="text-md font-semibold">{"Apple"}</p>
        <img
          src={
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ML773_VW_34FR+watch-case-45-stainless-graphite-s9_VW_34FR+watch-face-45-stainless-graphite-s9_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507905569"
          }
          style={{
            minHeight: "10em",
            minWidth: "10em",
            maxHeight: "20em",
            maxWidth: "20em",
            alignSelf: "center",
          }}
        />
        <p className=" flex flex-col text-lg font-semibold">
          {"iPhone 9"}
          <span className="text-gray-400 text-xs font-normal">
            {"Smartphone"}
          </span>
        </p>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold text-theme1">{"$520"}</p>
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center p-2 rounded-md bg-theme1 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
