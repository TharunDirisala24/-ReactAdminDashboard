import React,{useState} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App(){

const [isAuth,setAuth]=useState(false);

const logout=()=>setAuth(false);

const toggleDark=()=>{
    document.body.classList.toggle("dark-mode");
}

if(!isAuth){
    return <Login setAuth={setAuth}/>
}

return(

<Router>

<Routes>

<Route path="/" element={<Dashboard logout={logout} toggleDark={toggleDark}/>}/>
<Route path="/users" element={<Users logout={logout} toggleDark={toggleDark}/>}/>
<Route path="/analytics" element={<Analytics logout={logout} toggleDark={toggleDark}/>}/>
<Route path="/profile" element={<Profile logout={logout} toggleDark={toggleDark}/>}/>
<Route path="/settings" element={<Settings logout={logout} toggleDark={toggleDark}/>}/>

</Routes>

</Router>

)

}

export default App;