import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart, removeFromCart } = useContext(CartContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const totalCost = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (user.balance >= totalCost) {
      setUser((prevUser) => ({
        ...prevUser,
        balance: prevUser.balance - totalCost,
      }));
      clearCart();
      navigate(`/payment-result?status=success`);
    } else {
      navigate(`/payment-result?status=failure`);
    }
  };

  const handleCancel = () => {
    clearCart();
  };

  return (
    <div className="max-w-3xl w-full sm:w-3/4 lg:w-2/3 mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Checkout</h2>

      <div className="text-lg font-medium text-gray-700 mb-6 text-center">
        <p>Current Bank Balance: ${user.balance}</p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center">
          <p>No items added</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-4 border border-gray-200 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div className="flex-grow">
                  <span className="text-gray-700">{item.name}</span>
                </div>
                <span className="text-gray-900 font-semibold">${item.price}</span>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 px-3 py-1 text-sm  text-black rounded-md hover:text-white transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>

                </button>
              </div>
            ))}
          </div>

          {/* Total Cost */}
          <div className="text-xl font-semibold text-gray-700 mb-6">
            Total: ${totalCost}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleCheckout}
              className="px-8 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors duration-200"
            >
              Pay
            </button>
            <button
              onClick={handleCancel}
              className="px-8 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
