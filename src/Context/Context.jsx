import React, { createContext, useState } from "react";
export const DataContext = createContext();
export function DataProvider({ children }) {
  const [showcart, setshowcart] = useState(false);
  const [showsearch, setshowsearch] = useState(false);
  const [cartitem, setcartitem] = useState([]);
  const [searchitem, setsearchitem] = useState("");
  const [slidercurrent, setslidercurrent] = useState(0);

  const handleopencart = () => {
    setshowcart(true);
  };

  const handleclosecart = () => {
    setshowcart(false);
  };

  const handleopensearch = () => {
    setshowsearch(true);
  };

  function handleclosesearch() {
    setshowsearch(false);
  }

  // ✅ Helper function to clean/convert price string to number
  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string") {
      // remove ₹, Rs, $, commas, spaces
      return Number(price.replace(/[^0-9.]/g, ""));
    }
    return 0;
  };

  const addtocart = (item) => {
    setcartitem((prev) => {
      const existingitem = prev.find(
        (cartitem) => cartitem.description === item.description
      );

      if (existingitem) {
        return prev.map((cartitem) =>
          cartitem.description === item.description
            ? {
                ...cartitem,
                quantity: (cartitem.quantity || 1) + 1,
                price: parsePrice(item.price),
              }
            : cartitem
        );
      } else {
        return [
          ...prev,
          { ...item, quantity: 1, price: parsePrice(item.price) }, // ✅ sanitize
        ];
      }
    });
  };

  // ✅ calculate total price safely
  const totalprice = cartitem.reduce(
    (total, item) =>
      total + parsePrice(item.price) * Number(item.quantity || 1),
    0
  );

  return (
    <DataContext.Provider
      value={{
        showcart,
        setshowcart,
        handleopencart,
        cartitem,
        setcartitem,
        addtocart,
        handleclosecart,
        totalprice,
        showsearch,
        setshowsearch,
        handleopensearch,
        handleclosesearch,
        searchitem,
        setsearchitem,
        slidercurrent,
        setslidercurrent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
