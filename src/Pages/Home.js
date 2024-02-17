import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Nav from "../Components/Nav";
import ProductCard from "../Components/ProductCard";
import Spinner from "../Components/Spinner";
import banner from "../Assets/benner.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const user = useSelector((state) => state.user);

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(999999);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);

  const pagesReq = Math.ceil(100 / 9);

  const fetchData = async () => {
    try {
      setIsloading(true);

      var skip = page === 1 ? 1 : Math.round(page * 9 - 9);

      const request = await fetch(
        `https://dummyjson.com/products/?limit=9&skip=${skip}`
      );

      const response = await request.json();

      let filteredProducts = response.products;

      filteredProducts = filteredProducts.filter(
        (product) =>
          (!from || product.price >= from) && (!to || product.price <= to)
      );

      setData(filteredProducts);
    } catch (e) {
      console.log(e);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, from, to]);

  const handleFilterChange = (e) => {
    setPage(1); // Reset page to 1 when filter criteria changes
    if (e.target.name === "from") {
      setFrom(e.target.value);
    } else {
      setTo(e.target.value);
    }
  };

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
                name="from"
                id=""
                className="outline-none border-1p5 border-gray-200 p-2 rounded-md"
                onChange={handleFilterChange}
                value={from}
              >
                <option value={0} selected>
                  0
                </option>
                <option value={100}>100</option>
                <option value={200}>200</option>
                <option value={300}>300</option>
                <option value={400}>400</option>
                <option value={500}>500</option>
                <option value={600}>600</option>
                <option value={700}>700</option>
                <option value={800}>800</option>
                <option value={900}>900</option>
                <option value={1000}>1000</option>
                <option value={0}>Any</option>
              </select>
              <p>-To-</p>
              <select
                name="to"
                id=""
                className="outline-none border-1p5 border-gray-200 p-2 rounded-md"
                onChange={handleFilterChange}
                value={to}
              >
                <option value={0} selected>
                  0
                </option>
                <option value={100}>100</option>
                <option value={200}>200</option>
                <option value={300}>300</option>
                <option value={400}>400</option>
                <option value={500}>500</option>
                <option value={600}>600</option>
                <option value={700}>700</option>
                <option value={800}>800</option>
                <option value={900}>900</option>
                <option value={1000}>1000</option>
                <option value={999999}>Any</option>
              </select>
            </div>
          </div>
          {!isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-content-center p-3 border-1p5 border-gray-200 bg-white rounded-md">
              {data?.map((product) => {
                return (
                  <ProductCard
                    brand={product.brand}
                    cat={product.category}
                    image={product.images[0]}
                    price={product.price}
                    title={product.title}
                    id={product.id}
                    description={product.description}
                    key={product.id}
                  />
                );
              })}
            </div>
          ) : (
            <>
              <div className="flex w-full h-full items-center justify-center">
                <Spinner />
              </div>
            </>
          )}
          <div className="flex w-max gap-2 items-center justify-center p-1 pr-2 pl-2 border-2 border-gray-200 rounded-md bg-gray-50">
            <button
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
            >
              <FaArrowLeft />
            </button>
            <p className="font-semibold">{page}</p>
            <button
              onClick={() => {
                if (page < pagesReq) {
                  setPage(page + 1);
                }
              }}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
