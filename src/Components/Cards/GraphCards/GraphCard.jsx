import React from "react";
import Graph from "../../../Image/Graph.png";
import down from "../../../Image/Icons/down.svg";

const cardData = [
  { header: "Total Employees", count: 216, men: 120, women: 96, graph: "+2%" },
  { header: "Talent Request", count: 16, men: 6, women: 10, graph: "+5%" },
];

function GraphCard() {
  return cardData.map((x) => (
    <div className="outer border rounded-default border-borderColor">
      <div className="inner flex gap-6 items-center p-5">
        <div className="data text-left">
          <div className="text-taskHeader">{x.header}</div>
          <div className="text-countlg mb-[14px] mt-[5px]">{x.count}</div>
          <div className="category-wrapper flex flex-col gap-1">
            <div className="category flex">
              <div className="text-menuCategory font-normal text-primSubTitleColor mr-1">
                {x.men}
              </div>
              <div className="text-menuCategory font-normal text-primSubTitleColor">
                {" "}
                Men
              </div>
            </div>
            <div className="category flex">
              <div className="text-menuCategory font-normal text-primSubTitleColor mr-1">
                {x.women}
              </div>
              <div className="text-menuCategory font-normal text-primSubTitleColor">
                Women
              </div>
            </div>
          </div>
        </div>
        <div className="graph-wrapper relative">
          <div className="bodySmall text-primary-base font-medium">{x.graph}</div>
          <img src={down} alt="" className="absolute right-12 h-4 w-4" />
          <img src={Graph} alt="arrow" className="relative" />
          <div
            className="
          tag text-menuCategory 
          rounded bg-primary-light 
          leading-6 px-[14px]   
          font-normal mt-4"
          >
            {x.graph} Past month
          </div>
        </div>
      </div>
    </div>
  ));
}

export default GraphCard;
