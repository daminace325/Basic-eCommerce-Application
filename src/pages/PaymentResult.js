import React from "react";
import { useLocation, Link } from "react-router-dom";

const PaymentResult = () => {
  const query = new URLSearchParams(useLocation().search);
  const status = query.get("status");

  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="max-w-md w-full bg-white bg-opacity-50 rounded-lg shadow-lg p-8 text-center">
        {status === "success" ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-16 w-16 text-green-500 mx-auto mb-4" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h2>
            <p className="text-gray-700 mb-6">Thank you for your purchase. Your order is on its way!</p>
            <Link
              to="/products"
              className="px-6 py-3 bg-pink-400 text-white font-medium rounded-md hover:bg-pink-600 transition-colors duration-200"
            >
              Continue Shopping
            </Link>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-16 w-16 text-red-500 mx-auto mb-4" >
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            <h2 className="text-2xl font-bold text-red-600 mb-4">Payment Failed</h2>
            <p className="text-gray-700 mb-6">Something went wrong. Please try again.</p>
            <Link
              to="/checkout"
              className="px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors duration-200"
            >
              Try Again
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentResult;

