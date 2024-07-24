import React from "react";
import colors from "../../../api/colors.json";

function SumCard({ color, header, count, notificaton, key }) {
  return (
    <div
      key={key}
      className="px-5 py-3 min-w-[204px]  rounded-default"
      style={{ backgroundColor: color.bg }}
    >
      <div className="content flex flex-col items-start ">
        <div className="inicator text-titilesmall text-tertiary-dark">
          {header}
        </div>
        <div className="indicator-number text-count py-4 font-medium text-tertiary-dark">
          {count}
        </div>
        <div
          className="indi-note text-Indicator leading-6"
          style={{ color: color.textColor }}
        >
          {notificaton}
        </div>
      </div>
    </div>
  );
}

export default SumCard;
