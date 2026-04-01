import React,{useEffect,useState} from "react";

function Login({setAuth}){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [rememberMe,setRememberMe]=useState(false);
const [showPassword,setShowPassword]=useState(false);
const [forgotMode,setForgotMode]=useState(false);
const [forgotEmail,setForgotEmail]=useState("");
const themeOptions = [
  {name:"Mountain", bg:"url('https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1567&q=80')"},
  {name:"Beach", bg:"url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1567&q=80')"},
  {name:"Forest", bg:"url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1567&q=80')"},
  {name:"City", bg:"url('https://images.unsplash.com/photo-1499510318567-54c096fcae6e?auto=format&fit=crop&w=1567&q=80')"},
  {name:"Space", bg:"url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1567&q=80')"},
  {name:"Aurora", bg:"url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1567&q=80')"},
  {name:"Abstract", bg:"url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1567&q=80')"}
];
const [currentTheme,setCurrentTheme]=useState(themeOptions[0]);
const [currentTime, setCurrentTime]=useState(new Date().toLocaleTimeString());

useEffect(()=>{
  const remembered = localStorage.getItem("rememberedEmail");
  if(remembered){
    setEmail(remembered);
    setRememberMe(true);
  }

  const timer = setInterval(()=>{
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);

  return ()=>clearInterval(timer);
}, []);

const handleLogin=(e)=>{
  e.preventDefault();
  if(!email.trim() || !password){
    alert("Please enter email and password.");
    return;
  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    alert("Please enter a valid email address.");
    return;
  }
  if(password.length <= 6){
    alert("Password must be more than 6 characters.");
    return;
  }
  if(password[0] !== password[0].toUpperCase()){
    alert("Password must start with an uppercase letter.");
    return;
  }
  if(email==="admin@gmail.com" && password==="Admin123"){
    if(rememberMe){
      localStorage.setItem("rememberedEmail", email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
    setAuth(true)
  }else{
    alert("Invalid Login")
  }
}

const handleForgotPassword=(e)=>{
  e.preventDefault();
  if(!forgotEmail.trim()){
    alert("Please enter your email.");
    return;
  }

  // Simulated password recovery behavior
  setForgotMode(false);
  setEmail(forgotEmail);
  setPassword("");
  setForgotEmail("");
  alert(`If ${forgotEmail} is registered, password reset instructions were sent to that email.`);
}

return(
  <div className="login-page" style={{
    backgroundImage: currentTheme.bg,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
    <div className="card p-4 shadow col-md-3">
      <h3>{forgotMode ? "Reset Password" : "Login"}</h3>

      {forgotMode ? (
        <form onSubmit={handleForgotPassword}>
          <input
            className="form-control mb-3"
            placeholder="Email"
            value={forgotEmail}
            onChange={(e)=>setForgotEmail(e.target.value)}
          />

          <button className="btn btn-primary w-100 mb-2" type="submit">
            Send Reset Link
          </button>

          <button
            type="button"
            className="btn btn-link w-100"
            onClick={()=>setForgotMode(false)}
          >
            Back to Login
          </button>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <div className="d-flex mb-2 align-items-center">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-light ms-2"
              style={{width:'45px', padding:'0.2rem 0.45rem'}}
              onClick={()=>setShowPassword((v)=>!v)}
              aria-label={showPassword ? 'Hide Password' : 'Show Password'}
            >
              {showPassword ? '⌨️' : '🔒'}
            </button>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={()=>setRememberMe((v)=>!v)}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          <button className="btn btn-primary w-100 mb-2">
            Login
          </button>

          <button
            type="button"
            className="btn btn-link w-100"
            onClick={()=>setForgotMode(true)}
          >
            Forgot password?
          </button>

          <div className="my-2 text-center">or sign in with</div>
          <div className="d-flex justify-content-between mb-3">
            <button type="button" className="btn btn-outline-danger flex-fill me-1">Google</button>
            <button type="button" className="btn btn-outline-primary flex-fill mx-1">Facebook</button>
            <button type="button" className="btn btn-outline-dark flex-fill ms-1">GitHub</button>
          </div>
          <div className="text-center small">
            New user? <button type="button" className="btn btn-link p-0" onClick={()=>alert('Sign up flow not implemented in demo')}>Create an account</button>
          </div>
        </form>
      )}
      <div className="color-picker mt-4">
        <h6 className="mb-2">Choose background color</h6>
        <div className="d-flex gap-2 flex-wrap">
          {themeOptions.map((option)=> (
            <button
              key={option.name}
              type="button"
              className={`color-chip ${currentTheme.name===option.name ? 'active':' '}`}
              style={{background: option.bg}}
              onClick={()=>setCurrentTheme(option)}
              aria-label={option.name}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="color-footer">
      <div className="d-flex flex-column align-items-center p-2">
        <div className="d-flex gap-2 justify-content-center align-items-center mb-1">
          {themeOptions.map((option)=>(
            <button
              key={option.name}
              type="button"
              className={`color-chip ${currentTheme.name===option.name ? 'active':''}`}
              style={{background: option.bg}}
              onClick={()=>setCurrentTheme(option)}
              aria-label={option.name}
            />
          ))}
        </div>
        <div className="text-white small">Current time: {currentTime}</div>
      </div>
    </div>
  </div>
)
}

export default Login;