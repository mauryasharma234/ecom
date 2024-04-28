"use client";

import React, { useContext, useState } from "react";
import CartContext from "@/context/CartContext";


const ProposalForm = () => {
    // const cart = useContext(CartContext);
    const {cart } = useContext(CartContext);
    const [userInfo, setUserInfo] = useState({
        NO_OF_PERSON: "",
        PERSON_1_FIRST_NAME: "",
        PERSON_1_LAST_NAME: "",
        PERSON_1_DOB: "",
        PERSON_1_GENDER: "",
        PERSON_1_ADDRESS_LINE_1: "",
        PERSON_1_PINCODE: "",
        PERSON_1_CITY: "",
        PERSON_1_MOBILE_NUMBER: "",
        PERSON_1_EMAIL_ID: "",
        START_DATE: "",
    })

    const onChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
      };
      const submitHandler = (e) => {
        e.preventDefault();
    
        console.log(userInfo);
        console.log("cartlenght", cart?.cartItems?.length);
      };
    return(
        <section className="container max-w-3xl p-6 mx-auto">
        <h1 className="mb-3 text-xl md:text-3xl font-semibold text-black mb-8">
          Fill Your Details
        </h1>
  
        <form onSubmit={submitHandler}>
          <div className="grid md:grid-cols-2 gap-x-2 mt-5">
            <div className="mb-4">
              <label className="block mb-1"> No of Persons </label>
              <input
                type="text"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                placeholder="No of Persons"
                name="NO_OF_PERSON"
                value={userInfo.NO_OF_PERSON}
                onChange={onChange}
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block mb-1"> Person 1 First Name </label>
              <div className="relative">
                <div className="col-span-2">
                  <input
                    type="text"
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    placeholder="Person 1 First Name"
                    name="PERSON_1_FIRST_NAME"
                    value={userInfo.PERSON_1_FIRST_NAME}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-2 mt-5">
            <div className="mb-4">
              <label className="block mb-1"> Person 1 Last Name </label>
              <div className="relative">
                <div className="col-span-2">
                  <input
                    type="text"
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    placeholder="Person 1 Last Name"
                    name="PERSON_1_LAST_NAME"
                    value={userInfo.PERSON_1_LAST_NAME}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1"> Person 1 DOB </label>
              <div className="relative">
              <input
                    type="date"
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    placeholder="Person 1 DOB"
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
              <label className="block mb-1"> Person 1 Gender </label>
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
              <label className="block mb-1"> Person 1 Address Line 1 </label>
              <div className="relative">
                <div className="col-span-2">
                  <input
                    type="text"
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    placeholder="Person 1 Address Line 1"
                    name="PERSON_1_ADDRESS_LINE_1"
                    value={userInfo.PERSON_1_ADDRESS_LINE_1}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-2 mt-5">
            <div className="mb-4">
              <label className="block mb-1"> Person 1 Pincode </label>
              <input
                type="text"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                placeholder="Person 1 Pincode"
                name="PERSON_1_PINCODE"
                value={userInfo.PERSON_1_PINCODE}
                onChange={onChange}
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block mb-1"> Person 1 City </label>
              <div className="relative">
                <div className="col-span-2">
                  <input
                    type="text"
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    placeholder="Person 1 City"
                    name="PERSON_1_CITY"
                    value={userInfo.PERSON_1_CITY}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-2 mt-5">
            <div className="mb-4">
              <label className="block mb-1"> Person 1 Mobile Number </label>
              <input
                type="text"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                placeholder="Person 1 Mobile Number"
                name="PERSON_1_MOBILE_NUMBER"
                value={userInfo.PERSON_1_MOBILE_NUMBER}
                onChange={onChange}
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block mb-1"> Person 1 Email </label>
              <div className="relative">
                <div className="col-span-2">
                  <input
                    type="text"
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    placeholder="Person 1 Email"
                    name="PERSON_1_EMAIL_ID"
                    value={userInfo.PERSON_1_EMAIL_ID}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-2 mt-5">
            <div className="mb-4">
              <label className="block mb-1"> Start Date </label>
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
