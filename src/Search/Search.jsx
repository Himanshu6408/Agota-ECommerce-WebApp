import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { DataContext } from "../Context/Context";
import { RxCross1 } from "react-icons/rx";
import { categories, productData } from "../Context js/ProductData";

function Search() {
  const { showsearch, handleclosesearch, searchitem, setsearchitem } =
    useContext(DataContext);
  const filterproduct = productData.filter((p) =>
    p.name.toLowerCase().includes(searchitem.toLowerCase())
  );
  return (
    <>
      {showsearch && (
        <div className="fixed top-0 z-999 left-0 h-[100vh] w-[100vw] bg-white flex items-center justify-center">
          <div className="h-fit w-[60vw] absolute top-10">
            <h2 className="text-center text-3xl mt-10">Searching</h2>
            <ul className="flex gap-10 items-center justify-center mt-10 capitalize text-lg text-gray-400 ">
              {categories.map((item, index) => (
                <li
                  className={`hover:text-black cursor-pointer ${
                    index === 0 ? "text-black" : "text-gray-400"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="absolute top-45 left-[9.7vw] flex gap-5">
              {/* search icon */}
              <IoSearch className="ml-2" size={"1.5vw"} />
              <input
                value={searchitem}
                onChange={(e) => setsearchitem(e.target.value)}
                className="outline-none"
                type="text"
                placeholder="Search Product"
            
              />
               <span className=" border-b-1 border-gray-300 w-[41vw] absolute left-0 top-8"></span>
            </div>
            {/* search items */}
            <div className="mt-[6vw] ml-[9.5vw] text-center h-full w-full">
              {searchitem.trim() !== "" &&
                (filterproduct.length > 0 ? (
                  <ul className="grid grid-cols-3 gap-5">
                    {filterproduct.map((p, index) => (
                      <li
                        key={index}
                        className="border p-3 rounded-lg shadow-sm hover:shadow-md cursor-pointer"
                      >
                        <img
                          src={p.frontimage}
                          className="w-full h-32 object-cover mb-2"
                          alt=""
                        />
                        <p className="font-medium">{p.name}</p>
                        <p className="text-sm text-gray-600">{p.price}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-center">
                    No product is found
                  </p>
                ))}
            </div>
          </div>
          {/* close button */}
          <div className="absolute top-[2vw] right-30">
            <RxCross1
              onClick={handleclosesearch}
              className="cursor-pointer"
              size={"2vw"}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
