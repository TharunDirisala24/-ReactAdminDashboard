import React,{useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Profile({logout,toggleDark}){
  const [profile,setProfile]=useState({
    name:"Admin User",
    email:"admin@gmail.com",
    phone:"+1 555 123 4567",
    company:"Acme Corp",
    role:"Administrator",
    bio:"Passionate about building dashboard experiences."
  });

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setProfile(prev=>({ ...prev,[name]:value }));
  }

  const handleSave=(e)=>{
    e.preventDefault();
    alert("Profile saved (demo only)");
  }

return(
  <div>
    <Navbar logout={logout} toggleDark={toggleDark}/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"><Sidebar/></div>
        <div className="col-md-10 p-4 main-content">
          <h2>Profile</h2>
          <div className="card p-4 shadow-sm">
            <form onSubmit={handleSave}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input className="form-control" name="name" value={profile.name} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" value={profile.email} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input className="form-control" name="phone" value={profile.phone} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Company</label>
                  <input className="form-control" name="company" value={profile.company} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Role</label>
                  <input className="form-control" name="role" value={profile.role} onChange={handleChange} />
                </div>
                <div className="col-12">
                  <label className="form-label">Bio</label>
                  <textarea className="form-control" name="bio" rows="3" value={profile.bio} onChange={handleChange}></textarea>
                </div>
              </div>
              <button className="btn btn-primary mt-3" type="submit">Save Profile</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default Profile;
