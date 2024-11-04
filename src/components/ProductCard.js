import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link
    to={`/products/${product.id}`}
    className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm hover:shadow-xl hover:opacity-90 transition duration-300 transform hover:scale-105"
  >
    <img
      src={product.image} 
      alt={product.name}
      className="w-full h-48 object-cover"
    />

    <div className="p-6">
      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-gray-900 font-bold mt-4">Price: ${product.price}</p>
    </div>
  </Link>
);

export default ProductCard;
