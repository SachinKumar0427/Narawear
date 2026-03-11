import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Searchbar = () => {
  return (
    <div className="px-12 border-t border-b bg-gray-50   text-center flex items-center justify-center">
      <div className="ml-auto inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          className="flex-1 outline-none bg-inherit text-sm "
          placeholder="Search"
        />
        <CiSearch/>
      </div>

      <RxCross1 className="text-2xl ml-auto" />
    </div>
  );
};

export default Searchbar;
