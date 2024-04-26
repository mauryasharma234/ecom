import React, { useContext, useEffect } from "react";
import Link from "next/link";
import StarRatings from "react-star-ratings";
import Image from "next/image";
import CartContext from "@/context/CartContext";

const InsuranceProductItem = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  useEffect(() => {
    console.log("Printing complete product", product.source.name)
  }, [])
  const addToCartHandler = () => {
    addItemToCart({
      product: product.id,
      name: product.name,
      price: product.startingFromPrice,
      image: product.source.logo,
    //   stock: product.stock,
      seller: product.source.name,
    });
  };

  return (
    <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 flex p-3">
          <div
            style={{
              width: "80%",
              height: "70%",
              position: "relative",
            }}
          >
            <Image
              src={
                product.source.logo ? product.source.logo : "/images/default_insurance.jpeg"
              }
              alt="Product Logo"
              height="240"
              width="240"
            />
          </div>
        </div>
        <div className="md:w-2/4">
          <div className="p-4">
              {product.name}
          </div>
        </div>
        <div className="md:w-2/4">
          <div className="p-4">
                      {product.benefits.map((benefit) => (
                          <div key={benefit.id}>
                              <div><strong>{benefit.benefit}</strong></div>
                              <div>{benefit.description}</div>
                          </div>
                      ))}
          </div>
        </div>
        
        <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
          <div className="p-5">
            <span className="text-xl font-semibold text-black">
              Rs. {product.startingFromPrice}
            </span>

            <p className="text-green-500">Free Shipping</p>
            <div className="my-3">
              <a
                className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
                onClick={addToCartHandler}
              >
                {" "}
                Add to Cart{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default InsuranceProductItem;
