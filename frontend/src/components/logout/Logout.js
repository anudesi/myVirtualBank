import React, { useContext } from "react";
import { MyContext } from "../../contextApi/Context.js";
import Home from "../home/Home.js";

function Logout() {
  const { setUserData, setTransactionData } = useContext(MyContext);
  setUserData("");
  setTransactionData("");
  return <Home />;
}

export default Logout;
