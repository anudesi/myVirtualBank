import "./login.css";

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../../contextApi/Context.js";
import LoggedPage from "../../components/loggedPage/LoggedPage"

const Login = () => {
  const { userData, setUserData,setTransactionData } = useContext(MyContext);
  const [loginDetails, setLoginDetails] = useState({
    email:"",
    password:""
  });
  const navigate = useNavigate();
  const [loginMsg, setLoginMsg] = useState();

  const [userName, setUserName] = useState({});
  

  useEffect(() => {
    navigate("/login");
  }, [navigate]); 

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginDetails((values) => ({ ...loginDetails, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log("from frontend form", loginDetails);
    e.preventDefault();
    await axios
      .post("http://localhost:4000/user/loginAccount", loginDetails)
      .then((res) => {
        console.log("i am res.data.data.currentUser", res);
        setLoginMsg(res.data.status)
              setUserData(res.data.currentUser);  //capturing userdata sent from backend storing in context variable
         setUserName(userData.userName);
     
     
        
      });
  };

  const getTransaction = async () => {
    
    await axios
      .post("http://localhost:4000/transaction/viewTransactions", userName)
      .then((res) => {
        setTransactionData(res.data);//capturing transactiondata sent from backend storing in context variable
        console.log(res);
        
  
      });
  };

  return (
    <div className="forms">
      <h3>Login / Sign in to your Account</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" name="email" onChange={handleChange} />
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" name="password" onChange={handleChange} />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
       <>{loginMsg === "success" ? getTransaction() :''}</> 
       {loginMsg === "success" ?    navigate ("/loggedPage")    : <h1>{loginMsg}</h1>} 
    </div>
  );
};

export default Login;
