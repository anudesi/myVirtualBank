import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import {Link} from "react-router-dom";

const Register = () => {
  const [userDetails, setUserDetails] = useState({});

  const [failMessage, setFailMessage] = useState("failed");
  const [userInfo, setUserInfo] = useState({});

  const handleSubmit = async (e) => {
    console.log(userDetails);
    e.preventDefault();
    await axios
      .post("http://localhost:4000/user/registerAccount", userDetails)
      .then((res) => {
        setFailMessage(res.data.status);
        setUserInfo(res.data);
        
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserDetails((values) => ({ ...userDetails, [name]: value }));
  };

  return (
    <div className="registerContainer forms">
      <h3>Register / signup/ Create New Account</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
       
        <input type="text" name="username" onChange={handleChange} />
        <br />
        <label htmlFor="title">title:</label>

        <input type="text" name="title" onChange={handleChange} />
        <br />
        <label htmlFor="firstName">firstName:</label>

        <input type="text" name="firstName" onChange={handleChange} />

        <label htmlFor="lastName">lastName:</label>

        <input type="text" name="lastName" onChange={handleChange} />
        <br />
        <label htmlFor="email">email:</label>

        <input type="email" name="email" onChange={handleChange} />

        <label htmlFor="password">password:</label>

        <input type="password" name="password" onChange={handleChange} />
        <br />
        <label htmlFor="phone">phone:</label>

        <input type="number" name="phone" onChange={handleChange} />
        <br />
        <label htmlFor="streetName">streetName:</label>

        <input type="text" name="address.streetName" onChange={handleChange} />

        <label htmlFor="streetNumber">streetNumber:</label>

        <input
          type="number"
          name="address.streetNumber"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="country">country:</label>

        <input type="text" name="address.country" onChange={handleChange} />

        <label htmlFor="zipcode">zipcode:</label>

        <input type="number" name="address.zipcode" onChange={handleChange} />
        <br />
        <label htmlFor="city">city:</label>

        <input type="text" name="address.city" onChange={handleChange} />

        <br />
        <input type="submit" value="Submit" />
        <hr />
        {failMessage === "false" ? (
          <p>{"user already exits"}</p>
        ) : (
          <ul>
            <li>{userInfo.username}</li>
            <li>{userInfo.email}</li>
          </ul>
        )}
      </form>
      {/* incase of sucessfull login  also failed login of user existing*/}
<div>

{failMessage === "failed"? (
        ""
        ): (<>
  <Link to="/"> <button>close</button></Link>
  <Link to="/login">   
            <button>
              Login
            </button></Link></>
          
        )  }
</div>
</div>
  );
};

export default Register;
