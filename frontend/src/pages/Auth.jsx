//Signup & Login Page
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import React from "react";


const Auth = () => {
  const { login, isLoggedIn } = useContext(ShopContext);
  const [isLoginForm, setIsLoginForm] = useState(true); //State to toggle b/w login and signup UI
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    //Handler to set loginform state to true when user is on login
    setIsLoginForm(true); 
  };

  const handleSignup = () => {
    //Handler to set loginform state to false when user is on signup
    setIsLoginForm(false);
  };

  const handleLoggedin = (e) => {
    //Handler to set login state to true when user is loggedin and reddirects to homepage once user logsin
    e.preventDefault();
    login(); //Tells App we are loggedin
    navigate("/");
  };

  return (
    <>
      {!isLoggedIn &&
        (isLoginForm ? (
          <form onSubmit={handleLoggedin}>
            <h1>SignIn</h1>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <button className="cursor-pointer" type="submit">Login</button>
            <p>
              Don't have an account ?
              <span onClick={handleSignup}>Create Account</span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <h1>Signup</h1>
            <input
              value={username}
              type="name"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
            />
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <button className="cursor-pointer" type="submit">Signup</button>
            <p>
              Already have an account ?<span onClick={handleLogin}>Login</span>
            </p>
          </form>
        ))}
    </>
  );
};

export default Auth;
