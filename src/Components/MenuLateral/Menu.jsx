import React from "react";
import GroupName from "./GroupName";
import NavHome from "./Nav_selectors/NavHome";
import NavTasks from "./Nav_selectors/NavTasks";
import NavMembers from "./Nav_selectors/NavMembers";
import NavSettings from "./Nav_selectors/NavSettings";

function menu() {
  return (
    <div className="border-right">
      <div className="container">
        <GroupName />
        <NavHome />
        <NavTasks />
        <NavMembers />
        <NavSettings />
      </div>
    </div>
  );
}

export default menu;
