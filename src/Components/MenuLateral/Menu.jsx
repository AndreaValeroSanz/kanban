import React from "react";
import GroupName from "./GroupName";
import NavHome from "./Nav_selectors/NavHome";
import NavTasks from "./Nav_selectors/NavTasks";
import NavMembers from "./Nav_selectors/NavMembers";
import NavSettings from "./Nav_selectors/NavSettings";


function menu() {
<<<<<<< HEAD
  return (
    <div className="">
        <NavHome/>
        <NavTasks />
        <NavMembers />
        <NavSettings />
    </div>
  );
=======
    return (
        <div className="border-right">
            <div className="container">
            <GroupName />

            </div>

        </div>
    );
>>>>>>> 21d112cf805b2b6b8ce51361d8eee0dcc234a5a6
}

export default menu;
