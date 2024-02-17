import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Slices/cartSlice";

export default function ProductCard({
  brand,
  title,
  image,
  price,
  cat,
  description,
  id,
}) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart({ id: id }));
  };

  return (
    <div className="flex flex-col gap-3 p-4 shadow-sm border-1p5 border-gray-200 rounded-md w-[20vw] min-h-[50vh] max-h-[65vh]">
      <p className="text-md font-semibold">{brand}</p>
      <img
        src={image}
        alt={title}
        style={{
          minHeight: "10em",
          minWidth: "100%",
          maxHeight: "20em",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <div className="flex flex-col flex-grow p-2">
        <p className="text-lg font-semibold mb-1">{title}</p>
        <p className="text-sm mb-2">
          {description.length > 80
            ? description.slice(0, 80) + "..."
            : description}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold text-theme1">{"$" + price}</p>
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center p-2 rounded-md bg-theme1 text-white"
          >
            {items.includes(id) ? "Remove Item" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
