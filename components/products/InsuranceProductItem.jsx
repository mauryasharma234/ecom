// import React, { useContext, useEffect } from "react";
// import Link from "next/link";
// import StarRatings from "react-star-ratings";
// import Image from "next/image";
// import CartContext from "@/context/CartContext";

// const InsuranceProductItem = ({ product }) => {
//   const { addItemToCart, cart } = useContext(CartContext);
//   useEffect(() => {
//     console.log("Printing complete product", product.source.name)
//   }, [])
//   const addToCartHandler = () => {
//     addItemToCart({
//       product: product.id,
//       name: product.name,
//       price: product.startingFromPrice,
//       image: product.source.logo,
//     //   stock: product.stock,
//       seller: product.source.name,
//     });
//   };

//   return (
//     <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
//       <div className="flex flex-col md:flex-row">
//         <div className="md:w-1/4 flex p-3">
//           <div
//             style={{
//               width: "80%",
//               height: "70%",
//               position: "relative",
//             }}
//           >
//             <Image
//               src={
//                 product.source.logo ? product.source.logo : "/images/default_insurance.jpeg"
//               }
//               alt="Product Logo"
//               height="240"
//               width="240"
//             />
//           </div>
//         </div>
//         <div className="md:w-2/4">
//           <div className="p-4">
//               {product.name}
//           </div>
//         </div>
//         <div className="md:w-2/4">
//           <div className="p-4">
//                       {product.benefits.map((benefit) => (
//                           <div key={benefit.id}>
//                               <div><strong>{benefit.benefit}</strong></div>
//                               <div>{benefit.description}</div>
//                           </div>
//                       ))}
//           </div>
//         </div>
        
//         <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
//           <div className="p-5">
//             <span className="text-xl font-semibold text-black">
//               Rs. {product.startingFromPrice}
//             </span>

//             <p className="text-green-500">Free Shipping</p>
//             <div className="my-3">
//               <a
//                 className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
//                 onClick={addToCartHandler}
//               >
//                 {" "}
//                 Add to Cart{" "}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default InsuranceProductItem;
// import React, { useContext, useEffect, useState } from "react";
// import Link from "next/link";
// import StarRatings from "react-star-ratings";
// import Image from "next/image";
// import CartContext from "@/context/CartContext";

// const InsuranceProductItem = ({ product }) => {
//   const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);
//   const [isInCart, setIsInCart] = useState(false);

//   useEffect(() => {
//     const found = cart?.cartItems?.some(item => item.product === product.id);
//     setIsInCart(found);
//   }, [cart, product.id]);

//   const toggleCart = () => {
//     if (isInCart) {
//       deleteItemFromCart(product.id);
//     } else {
//       addItemToCart({
//         product: product.id,
//         name: product.name,
//         price: product.startingFromPrice,
//         image: product.source.logo,
//         seller: product.source.name,
//       });
//     }
//   };

//   return (
//     <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
//       <div className="flex flex-col md:flex-row">
//         <div className="md:w-1/4 flex p-3">
//           <div
//             style={{
//               width: "80%",
//               height: "70%",
//               position: "relative",
//             }}
//           >
//             <Image
//               src={
//                 product.source.logo ? product.source.logo : "/images/default_insurance.jpeg"
//               }
//               alt="Product Logo"
//               height="240"
//               width="240"
//             />
//           </div>
//         </div>
//         <div className="md:w-2/4">
//           <div className="p-4">
//               {product.name}
//           </div>
//         </div>
//         <div className="md:w-2/4">
//           <div className="p-4">
//               {product.benefits.map((benefit) => (
//                   <div key={benefit.id}>
//                       <div><strong>{benefit.benefit}</strong></div>
//                       <div>{benefit.description}</div>
//                   </div>
//               ))}
//           </div>
//         </div>
        
//         <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
//           <div className="p-5">
//             <span className="text-xl font-semibold text-black">
//               Rs. {product.startingFromPrice}
//             </span>

//             <p className="text-green-500">Free Shipping</p>
//             <div className="my-3">
//             <button
//                 className={`px-4 py-2 inline-block text-white ${isInCart ? "bg-red-600 hover:bg-red-700" : "bg-blue-600"} border border-transparent rounded-md hover:bg-blue-700 cursor-pointer`}
//                 onClick={toggleCart}
//               >
//                 {isInCart ? "Remove from Cart" : "Add to Cart"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default InsuranceProductItem;



import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import StarRatings from "react-star-ratings";
import Image from "next/image";
import CartContext from "@/context/CartContext";

const InsuranceProductItem = ({ product }) => {
  const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const found = cart?.cartItems?.some((item) => item.product === product.id);
    setIsChecked(found);
  }, [cart, product.id]);

  const toggleCart = () => {
    if (isChecked) {
      deleteItemFromCart(product.id);
    } else {
      addItemToCart({
        product: product.id,
        name: product.name,
        price: product.startingFromPrice,
        image: product.source.logo,
        seller: product.source.name,
      });
    }
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
                product.source.logo
                  ? product.source.logo
                  : "/images/default_insurance.jpeg"
              }
              alt="Product Logo"
              height="240"
              width="240"
            />
          </div>
        </div>
        <div className="md:w-2/4">
          <div className="p-4">{product.name}</div>
        </div>
        <div className="md:w-2/4">
          <div className="p-4">
            {product.benefits.map((benefit) => (
              <div key={benefit.id}>
                <div>
                  <strong>{benefit.benefit}</strong>
                </div>
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
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={toggleCart}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">
                  {isChecked ? "Remove" : "Add"}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default InsuranceProductItem;
