"use client";

import React, { useRef, useContext, useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import BreadCrumbs from "../layouts/BreadCrumbs";
import CartContext from "@/context/CartContext";
import NewReview from "../review/NewReview";
import OrderContext from "@/context/OrderContext";
import Reviews from "../review/Reviews";
import InsuranceProductItem from "./InsuranceProductItem";
// const insuranceData = [
//   {
//   id: 'a60e1d00-3d68-4349-bb5a-46353a8df886',
//   name: "Gadget Insurance",
//   startingFromPrice: '2000',
//   source: {
//       name: 'Ensuredit Technologies Pvt. Ltd.',
//       logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_9Ue8luINI_U6U8Q8lbO-eQWTcRwcYe2xqMOv1zL7Q&s'
//   },
//   benefits: [{
//       id: 1,
//       benefit: 'Test Benefit 1',
//       description: 'Test Desc 1'
//   }]
// },
// {
//   id: 2,
//   name: "Road Side Assistance",
//   startingFromPrice: '300',
//   source: {
//       name: 'Ensuredit Technologies Pvt. Ltd.',
//       logo: 'data:image/png;base64,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'
//   },
//   benefits: [{
//       id: 1,
//       benefit: 'Test Benefit 2',
//       description: 'Test Desc 2'
//   }]
// },

// ]

const insuranceData = [
  {
      "id": "b3466ede-6041-4538-9ed9-96e098aa992d",
      "name": "Fracture Protect",
      "source": {
          "id": "9b17f9bc-b47c-4517-b347-556102e3721a",
          "name": "Digit Insurance",
          "logo": "https://eit-enbed-public-uat.s3.ap-south-1.amazonaws.com/SOURCES/9b17f9bc-b47c-4517-b347-556102e3721a/logo.png",
          "entity": "",
          "updatedAt": null
      },
      "startingFromPrice": 250,
      "paymentMethods": "{}",
      "benefits": [
          {
              "id": "564bd9a1-6a6f-4ffb-837f-b009ce08dccc",
              "benefit": "FractureCare Assurance",
              "description": "Safeguard yourself against unexpected leg fractures with our specialized coverage. Stay worry-free with coverage for medical expenses, rehabilitation costs, and loss of income benefits, up to Rs. 7,500 for any accidental leg fracture.",
              "included": true
          },
          {
              "id": "bca7cdac-5a11-4648-ae54-674ac0a053aa",
              "benefit": "LegSafe Protection Plan",
              "description": "Ensure your financial security in the event of a leg fracture with our comprehensive protection plan. Enjoy coverage for medical expenses, surgery costs, and disability benefits, up to Rs. 10,000, ensuring your financial stability during recovery.",
              "included": true
          }
      ],
      "duration": -1,
      "category": "Fracture Protect",
      "price": 250,
      "masterProductId": ""
  },
  {
    "id": "e20c74f5-6d33-44d8-98e9-2b8ddc2780ae",
    "name": "Extended Warranty",
    "source": {
        "id": "9b17f9bc-b47c-4517-b347-556102e3721a",
        "name": "Digit Insurance",
        "logo": "https://eit-enbed-public-uat.s3.ap-south-1.amazonaws.com/SOURCES/9b17f9bc-b47c-4517-b347-556102e3721a/logo.png",
        "entity": "",
        "updatedAt": null
    },
    "startingFromPrice": 500,

    "paymentMethods": "{}",
    "benefits": [
        {
            "id": "fcf80536-491b-422a-bbf0-61e0b183695e",
            "benefit": "Extended Warranty Plus",
            "description": "Extend the warranty on your gadgets for an additional year beyond the manufacturer's warranty period. Enjoy peace of mind with coverage for mechanical and electrical breakdowns, with repair or replacement costs covered up to $200.",
            "included": true
        },
        {
            "id": "966cedcd-3c98-4905-b93d-e8ce3b7a6ebe",
            "benefit": "DeviceGuard Extended",
            "description": "Extend the warranty on your devices to safeguard against unexpected malfunctions. Enjoy comprehensive coverage for up to three additional years, with repair or replacement costs covered up to Rs. 500, ensuring your gadgets stay protected for longer.",
            "included": true
        }
    ],

    "duration": 3,
    "category": "Extended Warranty",
    "masterProductId": ""
}
];

const ProductDetails = ({ product }) => {
  const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);
  const { canUserReview, canReview } = useContext(OrderContext);
  const imgRef = useRef(null);
  // const [insuranceData, setInsuranceData] = useState([]);
  const [loading, setLoading] = useState(true);

  const setImgPreview = (url) => {
    imgRef.current.src = url;
  };
  useEffect(() => {
    console.log("Maurya length", cart?.cartItems?.length);
  }, [cart])

  useEffect(() => {
    canUserReview(product?._id);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])

  // useEffect(() => {
  //   fetchInsuranceData();
  // }, [])

  const fetchInsuranceData = async () => {
    const responseAuth = await fetch('https://api-uat.ensuredit.com/enbed/v1/auth/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: 'ecommerce', password: '12345' }),
      });
      const dataAuth = await responseAuth.json();
      // console.log(policyData,"helelf");
      // const response1 = await fetch('https://api-predev.ensuredit.com/enbed/v1/policy-stores/'+ policyData.id + '/certificate:download', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Bearer ' + dataAuth["accessToken"]
      //   },
      // });
      const requestBody = {
        pre_quote: {
          name: product?.name,
          description: product?.description,
          category: product?.category,
        },
        include_actual_price: true,
        include_benefits: true
      };
      const response = await fetch('https://api-uat.ensuredit.com/enbed/v1/products/recommended', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + dataAuth["accessToken"]
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data, "data");
      
      setInsuranceData(data.products);
      setLoading(false);
      console.log("insurnce data ", insuranceData);
  }
  const inStock = product?.stock >= 1;

  const addToCartHandler = () => {
    addItemToCart({
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0].url,
      stock: product.stock,
      seller: product.seller,
    });
  };

  const breadCrumbs = [
    { name: "Home", url: "/" },
    {
      name: `${product?.name?.substring(0, 100)} ...`,
      url: `/products/${product?._id}`,
    },
  ];
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section className="bg-white py-10">
        <div className="container max-w-screen-xl mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
            <aside>
              <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                <img
                  ref={imgRef}
                  className="object-cover inline-block"
                  src={
                    product?.images[0]
                      ? product?.images[0].url
                      : "/images/default_product.png"
                  }
                  alt="Product title"
                  width="340"
                  height="340"
                />
              </div>
              <div className="space-x-2 overflow-auto text-center whitespace-nowrap">
                {product?.images?.map((img) => (
                  <a
                    className="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 cursor-pointer"
                    onClick={() => setImgPreview(img?.url)}
                  >
                    <img
                      className="w-14 h-14"
                      src={img.url}
                      alt="Product title"
                      width="500"
                      height="500"
                    />
                  </a>
                ))}
              </div>
            </aside>
            <main>
              <h2 className="font-semibold text-2xl mb-4">{product?.name}</h2>

              <div className="flex flex-wrap items-center space-x-2 mb-2">
                <div className="ratings">
                  <StarRatings
                    rating={product?.ratings}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />
                </div>
                <span className="text-yellow-500">{product?.ratings}</span>

                <svg
                  width="6px"
                  height="6px"
                  viewBox="0 0 6 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
                </svg>

                <span className="text-green-500">Verified</span>
              </div>

              <p className="mb-4 font-semibold text-xl">Rs. {product?.price}</p>

              <p className="mb-4 text-gray-500">{product?.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                <button
                  className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  onClick={addToCartHandler}
                  disabled={!inStock}
                >
                  <i className="fa fa-shopping-cart mr-2"></i>
                  Add to cart
                </button>
              </div>

              <ul className="mb-5">
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">Stock</b>
                  {inStock ? (
                    <span className="text-green-500">In Stock</span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </li>
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">Category:</b>
                  <span className="text-gray-500">{product?.category}</span>
                </li>
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">
                    Seller / Brand:
                  </b>
                  <span className="text-gray-500">{product?.seller}</span>
                </li>
              </ul>
            </main>
          </div>

          {canReview && <NewReview product={product} />}
          <hr />
         
          <div className="font-semibold">
            <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
              You may also like
            </h1>
            
          </div>
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-900"></div>
            </div>
          ) : (
            <div>
              {/* Product details */}
              {insuranceData?.map((insuranceProduct) => (
            <InsuranceProductItem product={insuranceProduct} />
          ))
            }
            </div>
          )}
          
          {/* <InsuranceProductItem product={insuranceData}/> */}
          {/* <div className="font-semibold">
            <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
              Other Customers Reviews
            </h1>
            <Reviews reviews={product?.reviews} />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
