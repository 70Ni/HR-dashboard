import React from "react";

function RecentCard() {
  return (
    <div className="outer">
      <div className="inner text-white">
        <div className="header text-subHeader py-[10px] px-[10px] bg-tertiary-dark rounded-t-default pl-6  text-left text-white">
          Recently Activity
        </div>
        <div className="Recent-body  bg-tertiary-shade px-6 pb-[26px] rounded-b-default">
          <div className="Recent-content text-subHeader max-w-[340px] text-left  flex flex-col gap-[6px] pt-[26px] pb-7">
            <div className="time-update text-bodySmall">
              10.40 AM, Fri 10 Sept 2021
            </div>
            <div className="text-subHeader">You Posted a New Job</div>
            <div className="text-Indicator">
              Kindly check the requirements and terms of work and make sure
              everything is right.
            </div>
          </div>
          <div className="activity-wrapper flex items-center justify-between">
            <div className="text-Indicator text-left pr-3">
              Today you makes 12 Activity
            </div>
            <div className="Button text-subtitleSmall px-4 py-[10px] rounded text-white bg-primary-base">
              See All Activity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentCard;
