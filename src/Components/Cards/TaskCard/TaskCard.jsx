import React from "react";
import moreIcon from "../../../Image/Icons/more.svg";
import Pin from "../../../Image/Icons/Pin.svg";

function TaskCard({ task, time }) {
  return (
    <div className="outer border border-borderColor outline-offset-1  bg-taskBgColor rounded-md">
      <div className="inner-section flex justify-between px-4 py-3 w-full items-center">
        <div className="inner w-fit">
          <div className="text-taskHeader text-left text-SecoTitleColor pb-[4px]">
            {task}
          </div>
          <div className="text-bodySmall text-left text-primSubTitleColor">
            {time}
          </div>
        </div>
        <div className="icons-wrapper gap-5 ml-4 flex">
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
