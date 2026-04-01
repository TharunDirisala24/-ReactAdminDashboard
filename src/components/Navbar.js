import React from "react";

function Navbar({logout,toggleDark}){

return(

<nav className="navbar navbar-dark bg-dark">

<div className="container-fluid">

<h4 className="text-white">Admin Dashboard</h4>

<div>

<button className="btn btn-secondary me-2" onClick={toggleDark}>
Dark Mode
</button>

<button className="btn btn-danger" onClick={logout}>
Logout
</button>

</div>

</div>

</nav>

)

}

export default Navbar;