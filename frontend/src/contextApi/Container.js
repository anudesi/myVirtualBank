import React, { useState } from "react";
import { MyContext } from "./Context";

export default function Container({children }) {
 
  const[userData,setUserData] = useState()
const[transactionData,setTransactionData] = useState()
 
  return (
    <MyContext.Provider
      value={{
        userData,setUserData,transactionData,setTransactionData
      
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
