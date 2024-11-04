import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/mockData";

const ProductList = () => (
  <div className="max-w-7xl mx-auto p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductList;
