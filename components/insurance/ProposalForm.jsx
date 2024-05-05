"use client";

import React, { useContext, useState } from "react";
import CartContext from "@/context/CartContext";
import { useRouter } from "next/navigation";
import download from "downloadjs";
import axios from "axios";

const ProposalForm = () => {
  // const cart = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    NO_OF_PERSON: "",
    PERSON_1_FIRST_NAME: "",
    PERSON_1_LAST_NAME: "",
    PERSON_1_DOB: "",
    PERSON_1_GENDER: "",
    ADDRESS_LINE_1: "",
    PINCODE: "",
    CITY: "",
    MOBILE_NUMBER: "",
    EMAIL: "",
    START_DATE: "",
  })
  const formatDateToJan4Format = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  const onChange = (e) => {
    if (e.target.name === "START_DATE" || e.target.name === "PERSON_1_DOB") {

    }

    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleDownloadLink = async (pdfLinks) => {
    for (let index = 0; index < pdfLinks.length; index++) {
      const pdfUrl = pdfLinks[index];
      const response = await axios.get(pdfUrl, { responseType: 'blob' });
      download(response.data, `write_up_doc_${index + 1}.pdf`);
    }
  }
  let policy_urls = [];

  const submitHandler = async (e) => {
    e.preventDefault();
    const formattedStartDate = formatDateToJan4Format(userInfo.START_DATE);
    const formattedDOB = formatDateToJan4Format(userInfo.PERSON_1_DOB);
    const updatedUserInfo = {
      ...userInfo,
      START_DATE: formattedStartDate,
      PERSON_1_DOB: formattedDOB,
    };
    console.log(updatedUserInfo.START_DATE);
    console.log("cart length maurya", cart?.cartItems?.length);
    console.log("one cart item maurya", cart?.cartItems[0].product);
    const responseAuth = await fetch('https://api-uat.ensuredit.com/enbed/v1/auth/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'ecommerce', password: '12345' }),
    });
    const dataAuth = await responseAuth.json();
    console.log("tanmay", dataAuth);

    for (let i = 0; i < cart?.cartItems?.length; i++) {
      console.log("cart item maurya sharma", cart?.cartItems[i]);
      // console.log("cart item maurya sharma seller", cart?.cartItems[i].product.seller);
      if (cart?.cartItems[i].seller == "Ensuredit Technologies") {
        const response = await fetch('https://api-uat.ensuredit.com/enbed/v1/policy-stores', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + dataAuth["accessToken"]
          },
          body: JSON.stringify({ product_id: cart?.cartItems[i].product, proposal_form: updatedUserInfo })
        });
        const data = await response.json();
        console.log("data ", data)
        // policy_ids.push(data.id);

        //call api to buy 

        const responseBuy = await fetch('https://api-uat.ensuredit.com/enbed/v1/products/buy/client', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + dataAuth["accessToken"]
          },
          body: JSON.stringify({ policy_id: data.id })
        });
        const dataBuy = await responseBuy.json();
        console.log("here", dataBuy);

        const downloadBuy = await fetch('https://api-uat.ensuredit.com/enbed/v1/policy-stores/' + data.id + '/certificate:download', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + dataAuth["accessToken"]
          }
        });
        const dataDownload = await downloadBuy.json();

        console.log("dataDownload", dataDownload);

        policy_urls.push(dataDownload.url);
      }


    }

    handleDownloadLink(policy_urls);

    // const pdfUrl = dataDownload.url;
    // const link = document.createElement('a');
    // link.href = pdfUrl;
    // link.target = "_blank"
    // link.download = 'write_up_doc.pdf';
    // link.click();


    router.push('/success');
  };
  return (
    <section className="container max-w-3xl mx-auto">
      <h1 className="mb-3 text-xl md:text-3xl font-semibold text-black">
        Fill Your Details
      </h1>

      <form onSubmit={submitHandler}>
        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1"> First Name </label>
            <input
              type="text"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              placeholder="First Name"
              name="PERSON_1_FIRST_NAME"
              value={userInfo.PERSON_1_FIRST_NAME}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Last Name </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="Last Name"
                  name="PERSON_1_LAST_NAME"
                  value={userInfo.PERSON_1_LAST_NAME}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1">Start Date</label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="date"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="Start Date"
                  name="START_DATE"
                  value={userInfo.START_DATE}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Date of Birth </label>
            <div className="relative">
              <input
                type="date"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                placeholder="DOB"
                name="PERSON_1_DOB"
                value={userInfo.PERSON_1_DOB}
                onChange={onChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1"> Gender </label>
            <select
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              name="PERSON_1_GENDER"
              value={userInfo.PERSON_1_GENDER}
              onChange={onChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1"> Address</label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="Address"
                  name="ADDRESS_LINE_1"
                  value={userInfo.ADDRESS_LINE_1}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1"> Pincode </label>
            <input
              type="text"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              placeholder="Pincode"
              name="PINCODE"
              value={userInfo.PINCODE}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1"> City </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="City"
                  name="CITY"
                  value={userInfo.CITY}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1"> Mobile Number </label>
            <input
              type="text"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              placeholder="Mobile Number"
              name="MOBILE_NUMBER"
              value={userInfo.MOBILE_NUMBER}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1"> Email </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="Email"
                  name="EMAIL"
                  value={userInfo.EMAIL}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </section>
  )
}


export default ProposalForm;
