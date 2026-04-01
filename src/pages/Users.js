import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserTable from "../components/UserTable";

function Users({logout,toggleDark}){

return(

<div>

<Navbar logout={logout} toggleDark={toggleDark}/>

<div className="container-fluid">

<div className="row">

<div className="col-md-2">
<Sidebar/>
</div>

<div className="col-md-10 p-4 main-content">

<h2>Users</h2>

<UserTable/>

</div>

</div>

</div>

</div>

)

}

export default Users;