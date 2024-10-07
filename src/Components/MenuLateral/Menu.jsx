import React from "react";
import GroupName from "./GroupName";
import NavHome from "./Nav_selectors/NavHome";
import NavTasks from "./Nav_selectors/NavTasks";
import NavMembers from "./Nav_selectors/NavMembers";
import NavSettings from "./Nav_selectors/NavSettings";

function menu() {
  return (
    <div className="">
        <NavHome/>
        <NavTasks />
        <NavMembers />
        <NavSettings />
    </div>
  );
}

export default menu;
