import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import { RxCross1 } from "react-icons/rx";

function AddToCart() {
  const { showcart, cartitem, handleclosecart, totalprice } =
    useContext(DataContext);

  return (
    <div className="relative z-999">
      {showcart && (
        <div className="h-[100vh] w-[30vw] bg-gray-100 fixed top-0 right-0 p-4 overflow-y-auto">
          {/* Close button */}
          <RxCross1
            onClick={handleclosecart}
            className="ml-[25vw] cursor-pointer"
            size={"1.6vw"}
          />

          {cartitem.length === 0 ? (
            <p className="text-2xl text-gray-500 capitalize text-center mt-3">
              Your cart is empty
            </p>
          ) : (
            <>
              {/* Items List */}
              {cartitem.map((item, index) => (
                <div className="mt-3 flex gap-3 items-center" key={index}>
                  <img
                    className="h-22 w-22 object-cover"
                    src={item.frontimage}
                    alt={item.description}
                  />
                  <div>
                    <p>{item.description}</p>
                    <p>Price: ₹{item.price}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>Total: ₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}

              {/*  Total price */}
              <hr className="my-3" />
              <h2 className="text-xl font-bold">
                Total Price: ₹{Number(totalprice || 0).toFixed(2)}
              </h2>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default AddToCart;
