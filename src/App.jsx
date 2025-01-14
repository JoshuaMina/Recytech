import React, {useState, useEffect} from 'react';
import { supabase } from './createClient';


const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData,setFormData] = useState({
    firstName: '', lastName: '', email: '', password: ''
  })

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  
  function handleChange(event) {
    setFormData(prevFormData=>{
      return {
        ...prevFormData,
        [event.target.name]:event.target.value
      }
      


    })
  }

  async function handleSubmit(event){
    event.preventDefault(); 
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              first_name: formData.firstName,
              age: formData.lastName,
            }
          }
        }
      )

      alert('Confirmation already sent to your email. Kindly view the email for verification :)')
    } catch (error) {
      alert (error)
    }
    
  }

  console.log(formData)






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
          <div className={`form login-form ${isLogin ? "active" : ""}`} > 
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" placeholder="Email" onChange={handleChange}/>
              <i className="bx bx-user"></i>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" onChange={handleChange}/>
              <i className="bx bx-lock-alt"></i>
            </div>
            
            <div className="input-group">
              <button type= 'submit' className="btn">Login</button>
            </div>

            </form>
            
            <p>
              
              <a href="#" onClick={toggleForm}>
              Forget Password?
              </a>
            </p>
            <p>
              or
            </p>
            <div className="input-group flex-container">
              <button className="kl "><img src="/src/assets/img/google.png" alt="google Logo" className="icon" />Google Login</button>
              <button className="kl "><img src="/src/assets/img/fb.png" alt="google Logo" className="icon" />Facebook Login</button>
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

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" placeholder="Firstname" name='firstName' onChange={handleChange}/>
                <i className="bx bx-user"></i>
              </div>
              <div className="input-group">
                <input type="text" placeholder="Lastname"  name='lastName'onChange={handleChange}/>
                <i className="bx bx-user"></i>
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email"  name='email'onChange={handleChange}/>
                <i className="bx bx-envelope"></i>
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password"  name='password' onChange={handleChange}/>
                <i className="bx bx-lock-alt"></i>
              </div>
              <div className="input-group">
                <button type= 'submit' className="btn">Register</button>
              </div>
            </form>
            
            <p>
              or
            </p>
            <div className="input-group flex-container">
              <button className="kl "><img src="/src/assets/img/google.png" alt="google Logo" className="icon" />Use Google</button>
              <button className="kl "><img src="/src/assets/img/fb.png" alt="google Logo" className="icon" />Use Facebook</button>
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