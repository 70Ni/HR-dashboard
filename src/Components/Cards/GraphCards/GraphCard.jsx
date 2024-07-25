import React from "react";
import Graph from "../../../Image/Graph.png";

function GraphCard() {
  return (
    <div className="outer border rounded-default border-borderColor">
      <div className="inner flex gap-6 items-center p-5">
        <div className="data text-left">
          <div className="text-taskHeader">Total Employees</div>
          <div className="text-countlg mb-[14px] mt-[5px]">216</div>
          <div className="characters">
            <div className="person-count ">
              <span
                className="count
             text-menuCategory 
            font-normal
             text-primSubTitleColor"
              >
                120
              </span>
              <span
                className="count
             text-menuCategory 
            font-normal
             text-primSubTitleColor"
              >
                Men
              </span>
            </div>
            <div className="characters">
              <span
                className="count
             text-menuCategory 
            font-normal
             text-primSubTitleColor"
              >
                96
              </span>
              <span
                className="count
             text-menuCategory 
            font-normal
             text-primSubTitleColor"
              >
                Women
              </span>
            </div>
          </div>
        </div>
        <div className="graph-wrapper ">
          <img src={Graph} alt="" />
          <div
            className="
          tag text-menuCategory 
          leading-6 px-[14px] 
          rounded bg-primary-light 
          font-normal mt-5"
          >
            +2% Past month
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphCard;
