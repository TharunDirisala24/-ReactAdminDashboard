import React from "react";
import {Link} from "react-router-dom";

function Sidebar(){

return(

<div className="sidebar">

<h4>Menu</h4>

<Link to="/">Dashboard</Link>
<Link to="/users">Users</Link>
<Link to="/analytics">Analytics</Link>
<Link to="/profile">Profile</Link>
<Link to="/settings">Settings</Link>

</div>

)

}

export default Sidebar;