import React, {useState, useEffect} from 'react';
import { supabase } from './createClient';

const App = () => {

  const [clients,setUsers]=useState([])  

  const [client,setUser] = useState({
    name:'', email:''
  })

  console.log(client)

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers(){
    const {data} = await supabase
    .from('clients')
    .select('*')
    setUsers(data)
    console.log(data)
  }

  function handleChange(event) {
    setUser(prevFormData=>{
      return {
        ...prevFormData,
        [event.target.name]:event.target.value
      }
      


    })
  }

  async function createUsers(event){
    
    // event.preventDefault(); // Prevent page reload
    // if (!client.name || !client.email) {
    //   alert('Please fill in all fields');
    //   return;
    // }

    // const { error } = await supabase
    //   .from('clients')
    //   .insert({ name: client.name, email: client.email });

    // if (error) {
    //   console.error('Error inserting user:', error.message);
    // } else {
    //   fetchUsers(); // Refresh the table after successful insertion
    //   setUser({ name: '', email: '' }); // Reset form
    // }
  }

  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
     console.log("Is Login: ", isLogin);
  };


  return (
    <div>
      <div className="wrapper">
      {/* Navbar */}
      <nav className="nav">
        <div className="position">
          <div className="nav-logo">
            <img src="/src/assets/img/logo.png" alt="RecyTech Logo" />
          </div>
          <div>
            <p>RecyTech</p>
          </div>
        </div>
      </nav>

      {/* Form Box */}
      <div className="form-box">
        <div className={`login-container ${isLogin ? 'active' : 'inactive'}`}>
          <div className="top">
            <header>User Login</header>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Username or Email" />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="password" className="input-field" placeholder="Password" />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Sign In" />
          </div>
          <span>
            Don't have an account?{' '}
            <a href="#" onClick={toggleForm}>
              Sign Up
            </a>
          </span>
        </div>

        <div className={`register-container ${!isLogin ? 'active' : 'inactive'}`}>
          <div className="top">
            <header>Sign Up</header>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Firstname" />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Lastname" />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" className="input-field" placeholder="Password" />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Register" />
          </div>
          <span>
            Have an account?{' '}
            <a href="#" onClick={toggleForm}>
              Login
            </a>
          </span>
        </div>
      </div>

    </div>
    </div>

  )
}

export default App