import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Charts from "../components/Charts";

function Dashboard({logout,toggleDark}){

return(

<div>

<Navbar logout={logout} toggleDark={toggleDark}/>

<div className="container-fluid">

<div className="row">

<div className="col-md-2">
<Sidebar/>
</div>

<div className="col-md-10 p-4 main-content">

<h2>Dashboard</h2>

<div className="mt-4">
<Charts/>
</div>

</div>

</div>

</div>

</div>

)

}

export default Dashboard;