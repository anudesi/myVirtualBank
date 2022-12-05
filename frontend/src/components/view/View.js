import "./view.css";
import { useContext, useState } from "react";
import { MyContext } from "../../contextApi/Context.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AccountClosure from "../accountClosure/AccountClosure.js";


function View() {
  const { userData, setUserData } = useContext(MyContext);
  const [display, setDisplay] = useState("hideEdit");
  const [editData, setEditData] = useState({email:userData?userData.email:""});
  const show = (e) => {
    setDisplay("showEdit");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("iam from form",editData)
    await axios
      .post("http://localhost:4000/user/updateAccount", editData)
      .then((res) => {
        //setUserData(res.data)
        console.log("i am res.data", res.data);
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditData((values) => ({ ...editData, [name]: value }));
    console.log(editData);
  };
  return (
    <div>
      {userData ? (
        <>
          <h3>{`${userData.firstName} ${userData.lastName}`}</h3>
          <h3>
            {userData.customerType} Banking --- Account Number
            {userData.accountNumber}
          </h3>

          <h3>address:</h3>

          <p>
            Street: {userData.address.streetName}
            {userData.address.streetNumber}<br />
            City: {userData.address.zipcode} {userData.address.city}<br />
            {userData.address.country}
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="password">new-password:</label> Enter new password
            <span onClick={show}>
              <FontAwesomeIcon icon={faPen} />
              <input
                text="number"
                name="password"                
                className={display}
                onChange={handleChange}
              />
            </span>
            <br />
            <label htmlFor="Phone">Phone: {userData.phone}</label>
            <span onClick={show}>
              <FontAwesomeIcon icon={faPen} />
              <input
                text="number"
                className={display}
                name="phone"
                onChange={handleChange}
              />
            </span>
            <br />
            <label htmlFor="withdrawLimit">Withdrawal limit: </label>
            {userData.withdrawLimit}
            <span onClick={show}>
              <FontAwesomeIcon icon={faPen} />
              <input
                text="number"
                name="withdrawLimit"
                className={display}
                onChange={handleChange}
              />
            </span>
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <h1>Please login to view</h1>
      )}
      <AccountClosure/>
    </div>
    
  );
}

export default View;
