import React, {useState, useEffect} from 'react';
import { supabase } from './createClient';


const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.error("Google Sign-In Error:", error);
  };

  const signInWithFacebook = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });
    if (error) console.error("Facebook Sign-In Error:", error);
  };
  return (
    <div className="app-wrapper">
     
        <div className="nav-content">
          <img src="/src/assets/img/logo.png" alt="RecyTech Logo" className="nav-logo" />
          <p className="nav-title">RecyTech</p>
        </div>
      

      {/* Form Box */}
      <div className="form-container">
        <div className={`form-wrapper ${isLogin ? "login-mode" : "signup-mode"}`}>
          {/* Login Form */}
          <div className={`form login-form ${isLogin ? "active" : ""}`}>
            <h2>Login</h2>
            <div className="input-group">
              <input type="text" placeholder="Username or Email" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-group">
              <button className="btn">Login</button>
            </div>
            <div className="input-group social">
              <button className="kl social"><img src="/src/assets/img/google.png" alt="google Logo" className="icon" />  Login with Google</button>
            </div>
            <div className="input-group social">
              <button className="kl social"><img src="/src/assets/img/google.png" alt="google Logo" className="icon" />  Login with Google</button>
            </div>
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={toggleForm}>
                Sign Up
              </a>
            </p>
            
          </div>

          {/* Signup Form */}
          <div className={`form signup-form ${!isLogin ? "active" : ""}`}>
            <h2>Sign Up</h2>
            <div className="input-group">
              <input type="text" placeholder="Firstname" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Lastname" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-group">
              <button className="btn">Register</button>
            </div>
            <p>
              Already have an account?{" "}
              <a href="#" onClick={toggleForm}>
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App