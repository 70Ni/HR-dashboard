import React from "react";

function RecentCard() {
  return (
    <div className="outer min-w-[427px]">
      <div className="inner text-white">
        <div className="header text-subHeader py-[10px] px-[10px] bg-tertiary-shade rounded-t-default pl-[24px]  text-left text-white">
          Recently Activity
        </div>
        <div className="Recent-content text-subHeader bg-tertiary-dark">
          <div className="time-update text-bodySmall">
            10.40 AM, Fri 10 Sept 2021
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentCard;
