import React from "react";
import moreIcon from "../../../Image/Icons/more.svg";
import Pin from "../../../Image/Icons/Pin.svg";

function TaskCard() {
  return (
    <div className="outer border border-borderColor outline-offset-1 px-4 py-3 bg-taskBgColor rounded-md">
      <div className="inner-section flex">
        <div className="inner ">
          <div className="text-taskHeader text-left text-SecoTitleColor pb-[4px]">
            Meeting HR Department
          </div>
          <div className="text-bodySmall text-left text-primSubTitleColor">
            Yesterday, 12:30 PM
          </div>
        </div>
        <div className="icons-wrapper gap-5 flex ml-4 items-center">
          <img
            src={Pin}
            alt=""
            className="w-6 h-6 opacity-50 hover:opacity-100"
          />
          <img src={moreIcon} alt="" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
