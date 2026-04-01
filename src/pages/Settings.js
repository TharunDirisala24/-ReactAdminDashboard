import React,{useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Settings({logout,toggleDark}){
  const [settings,setSettings]=useState({
    notifications:true,
    darkMode:false,
    language:"en",
    timezone:"UTC",
    autoUpdate:true
  });

  const handleToggle=(key)=>{
    setSettings(prev=>({ ...prev,[key]: !prev[key] }));
  }

  const handleSelect=(e)=>{
    const {name,value}=e.target;
    setSettings(prev=>({ ...prev,[name]:value }));
  }

  const handleSave=(e)=>{
    e.preventDefault();
    alert("Settings saved (demo only)");
  }

return(
  <div>
    <Navbar logout={logout} toggleDark={toggleDark}/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"><Sidebar/></div>
        <div className="col-md-10 p-4 main-content">
          <h2>Settings</h2>
          <div className="card p-4 shadow-sm">
            <form onSubmit={handleSave}>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="notifications" checked={settings.notifications} onChange={()=>handleToggle('notifications')} />
                <label className="form-check-label" htmlFor="notifications">Email notifications</label>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="darkMode" checked={settings.darkMode} onChange={()=>handleToggle('darkMode')} />
                <label className="form-check-label" htmlFor="darkMode">Dark mode</label>
              </div>
              <div className="mb-3">
                <label className="form-label">Language</label>
                <select className="form-select" name="language" value={settings.language} onChange={handleSelect}>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Timezone</label>
                <select className="form-select" name="timezone" value={settings.timezone} onChange={handleSelect}>
                  <option value="UTC">UTC</option>
                  <option value="GMT">GMT</option>
                  <option value="EST">EST</option>
                  <option value="PST">PST</option>
                </select>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="autoUpdate" checked={settings.autoUpdate} onChange={()=>handleToggle('autoUpdate')} />
                <label className="form-check-label" htmlFor="autoUpdate">Auto update app</label>
              </div>
              <button className="btn btn-primary">Save Settings</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default Settings;
