import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({children,logout,toggleDark}){

return(

<div>

<Navbar logout={logout} toggleDark={toggleDark}/>

<div className="container-fluid">

<div className="row">

<div className="col-md-2">
<Sidebar/>
</div>

<div className="col-md-10 p-4">
{children}
</div>

</div>

</div>

</div>

)

}

export default Layout;