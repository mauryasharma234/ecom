"use client";

import React from "react";
import CustomPagination from "../layouts/CustomPagination";
import Filters from "../layouts/Filters";

import ProductItem from "./ProductItem";
import InsuranceProductItem from "./InsuranceProductItem";

data = [{
    id: 1,
    name: "Gadget Insurance",
    startingFromPrice: '2000',
    source: {
        name: 'abc',
        logo: ''
    },
    benefits: [{
        id: 1,
        benefit: '',
        description: ''
    }]

}]

const ListInsuranceProducts = ({ data }) => {
  return (
    <section className="py-12">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* <Filters /> */}

          <main className="md:w-2/3 lg:w-3/4 px-3">
            {data?.map((product) => (
              <InsuranceProductItem key={product?.id} product={product} />
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ListProducts;
