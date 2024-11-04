import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { products } from "../data/mockData";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id === parseInt(id));

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`); 
  };

  return (
    <div className="flex flex-grow justify-center items-center p-4">
      <div className="flex max-w-4xl w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-1/2 object-cover rounded-lg"  
        />

        <div className="p-6 w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
          <p className="text-gray-600 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mb-6">Price: ${product.price}</p>

          <button
            onClick={() => handleAddToCart(product)} 
            className="w-full px-6 py-3 bg-pink-400 text-white font-medium rounded-md hover:bg-pink-600 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
