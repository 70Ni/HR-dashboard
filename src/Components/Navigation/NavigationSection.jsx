import React from "react";

function NavigationSection({ Category, menuItems, start, stop }) {
  return (
    <div className="mainmenu flex flex-col items-start my-10">
      <div className="menu-category text-lg text-menuCategory text-primSubTitleColor px-[30px] py-[10px] opacity-50">
        {Category}
      </div>
      <div className="menu-item">
        {menuItems.slice(start, stop).map((item) => (
          <div className="menu-item flex px-[30px] py-[16px]">
            <img src={item.NavIcon} alt="" />
            <div className="menu-item ml-6 text-taskHeader text-primSubTitleColor">
              {item.Navname}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigationSection;
