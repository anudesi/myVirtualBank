import React,{useState,useContext} from "react";
import axios from 'axios'
import { MyContext } from "../../contextApi/Context.js";



function Transactions() {
const {userData,transactionData,setTransactionData} = useContext(MyContext);
const[transactionDetails,setTransactionDetails] = useState({
    username:(userData)?userData.username:""
});
const[transStatus,setTransStatus] = useState();

// show display
const [display, setDisplay] = useState("hideEdit");
const show = (e) => {
  if(display==="hideEdit"){
    setDisplay("showEdit")}
   else{ setDisplay("hideEdit")};
  };

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTransactionDetails((values) => ({ ...transactionDetails, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log("from input form",transactionDetails)
    e.preventDefault();
    await axios
      .post("http://localhost:4000/transaction/transactAmount", transactionDetails)
      .then((res) => {
        
        setTransactionData(res.data.data)
        setTransStatus(res.data.status)
      });
   show();
  };

  return (
    <div>
      <h3>Deposit/withdraw Form <span onClick={show}>Click here...</span></h3>
      <div className={display}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="accountNumber">accountNumber:</label>
          <br />
          <input type="text" name="accountNumber" onChange={handleChange}/>
          <br />
        </div>
      
        <div>
          <label htmlFor="currentBalance">currentBalance:</label>
          <br />
          <input type="text" name="currentBalance" onChange={handleChange}/>
          <br />
        </div>
        <div>
          <label htmlFor="transactionType" >Please select transaction type:</label>         
         <select name="transactionType" id="transactionType" value={transactionDetails.transactionType} onChange={handleChange}>
            <option value="deposit">Deposit</option>
            <option value="withdraw">withdraw</option>
         </select>
          <br />
        </div>
        <div>
          <label htmlFor="transactionAmount">*transactionAmount:</label>
          <br />
          <input type="text" name="transactionAmount" onChange={handleChange}/>
          <br />
        </div>
      
       
        <div>
          <label htmlFor="transactionRemarks">*transactionRemarks:</label>
          <br />
          <input type="text" name="transactionRemarks" onChange={handleChange}/>
          <br />
        </div>
        <div>
          <label htmlFor="clientName">*clientName:</label>
          <br />
          <input type="text" name="clientName" onChange={handleChange}/>
          <br />
        </div>
        <div>
          <label htmlFor="clientAccountNumber">clientAccountNumber:</label>
          <br />
          <input type="text" name="clientAccountNumber" onChange={handleChange}/>
          <br />
        </div>
        <div>
          <label htmlFor="clientBICNumber">clientBICNumber:</label>
          <br />
          <input type="text" name="clientBICNumber" onChange={handleChange}/>
          <br />
        </div>
        <div>
          <label htmlFor="clientBank">clientBank:</label>
          <br />
          <input type="text" name="clientBank" onChange={handleChange}/>
          <br />
        </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
      {transStatus === "success" ? ( <>
       <h3 className={display}> Your transaction Details</h3>
        <h3 className={display}>Transaction Amount: {transactionData.transactionAmount}</h3>
        </>) : ""
       
      }
    </div>
  );
}

export default Transactions;
