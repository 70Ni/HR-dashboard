import React from "react";

const responsive =
  "menu-item ml-6 text-taskHeader text-primSubTitleColor max-md:hidden";
const expand = "menu-item ml-6 text-taskHeader text-primSubTitleColor";

const mSm = "flex px-4 py-[16px]";
const mLg = "flex px-[30px] py-[16px]";

function NavigationSection({ Category, menuItems, start, stop, collapse }) {
  return (
    <div className="mainmenu flex flex-col items-start my-10">
      <div
        className="menu-category text-lg text-menuCategory text-primSubTitleColor px-[30px] py-[10px] opacity-50"
        style={collapse && { padding: "0px1,4px" }}
      >
        {Category}
      </div>
      <div className="menu-item">
        {menuItems.slice(start, stop).map((item) => (
          <div className={collapse ? mSm : mLg}>
            <img src={item.NavIcon} alt="" />
            <div className={collapse ? responsive : expand}>{item.Navname}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigationSection;
