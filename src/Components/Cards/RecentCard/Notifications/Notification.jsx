import React from "react";
import RecentCard from "../RecentCard";
import SumCard from "../../SummaryCard/SumCard";
import TaskCard from "../../TaskCard/TaskCard";
import arrow from "../../../../Image/Icons/arrowdown.svg";

const taskList = [
  {
    task: "Outing schedule for every departement",
    time: "5 Minutes ago",
  },
  {
    task: "Meeting HR Department",
    time: "Yesterday, 12:30 PM",
  },
  {
    task: "IT Department need two more talents for UX/UI Designer position",
    time: "Yesterday, 09:15 AM",
  },
  {
    task: "Outing schedule for every departement",
    time: "5 Minutes ago",
  },
  {
    task: "Meeting HR Department",
    time: "Yesterday, 12:30 PM",
  },
  {
    task: "IT Department need two more talents for UX/UI Designer position",
    time: "Yesterday, 09:15 AM",
  },
];

function Notification() {
  return (
    <div className="inner px-5 py-4 rounded-default border relative border-borderColor flex">
      <div className="outer relative">
        <div className="Headersection flex justify-between pb-2">
          <div className="text-subHeader pr-[6px] text-tertiary-shade">
            Announcement
          </div>
          <div className="time-selector-wrapper rounded px-2 border flex items-center">
            <div
              className="time-selector text-menuCategory 
          leading-7 
          font-normal 
          text-primSubTitleColor"
            >
              Today, 13 Sep 2021
            </div>
            <img src={arrow} alt="" className="h-[18px] w-[18px]" />
          </div>
        </div>
        <div className="notification-wrapper relative flex flex-col gap-2 overflow-y-scroll h-64">
          {taskList.map((x) => (
            <TaskCard task={x.task} time={x.time} />
          ))}
        </div>
      </div>
      <div
        className="See-more text-subtitleSmall
       text-primary-base 
       py-[10px] absolute 
       bg-white border 
       bottom-0 right-0
       rounded-b-lg 
       w-full
       cursor-pointer"
      >
        See All Announcement
      </div>
    </div>
  );
}

export default Notification;
