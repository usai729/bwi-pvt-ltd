import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import Spinner from "../Components/Spinner";

export default function SearchResults() {
  const { search } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const fetchData = async () => {
    try {
      setIsloading(true);

      const request = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );

      const response = await request.json();

      setData(response.products);

      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div>
      <Nav />

      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col md:mr-[10vw] md:ml-[10vw] p-10 items-center gap-10">
          <p className="text-lg font-bold">Showing results for {search}</p>
          {data?.length > 0 ? (
            <>
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
            </>
          ) : (
            <>
              <p className="text-md font-semibold">
                No results for {search}...:/
              </p>
            </>
          )}
          <Link to={"/"}>Go back to home</Link>
        </div>
      </div>
    </div>
  );
}
