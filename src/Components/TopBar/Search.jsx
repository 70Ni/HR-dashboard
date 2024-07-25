import React from "react";
import search from "../../Image/Icons/search.svg";

function Search() {
  return (
    <div>
      <div className="search border rounded px-4 py-[5px] flex outline-offset-1 bg-NavShade">
        <input
          type="text rounded"
          placeholder="Search"
          className="placeholder:text-Indicator 
          placeholder:leading-6 
          placeholder:text-borderColor
          text-Indicator
          bg-NavShade 
          "
        />
        <img src={search} alt="" className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Search;
