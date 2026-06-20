import { useState } from "react"; 

import { useNavigate } from "react-router-dom"; 

import "./Login.css"; 

 

function Login() { 

  const [email, setEmail] = useState(""); 

  const [password, setPassword] = useState(""); 

  const [error, setError] = useState(""); 

  const navigate = useNavigate(); 

 

  const handleSubmit = (e) => { 

    e.preventDefault(); 

    if (!email || !password) { 

      setError("Please fill in both fields."); 

      return; 

    } 

    // Placeholder logic — replace with real auth later 

    navigate("/code"); 

  }; 

 

  return ( 

    <div className="login-container"> 

      <form className="login-box" onSubmit={handleSubmit}> 

        <h2>Login</h2> 

        {error && <p className="error-text">{error}</p>} 

        <input 

          type="email" 

          placeholder="Email" 

          value={email} 

          onChange={(e) => setEmail(e.target.value)} 

        /> 

        <input 

          type="password" 

          placeholder="Password" 

          value={password} 

          onChange={(e) => setPassword(e.target.value)} 

        /> 

        <button type="submit" className="primary-btn"> 

          Login 

        </button> 

      </form> 

    </div> 

  ); 

} 

 

export default Login; 

 