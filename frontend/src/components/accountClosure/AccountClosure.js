

import React,{ useState} from "react";
import axios from "axios"



const AccountClosure = () => {
 
const[closureDetails,setClosureDetails] = useState({});



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setClosureDetails((values) => ({ ...closureDetails, [name]: value }));
  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    await axios
      .post("http://localhost:4000/user/deactivateAccount", closureDetails)
      .then((res)=>{      
        console.log("i am res.data", res.data);
      });
   
  };

  return (
    <div className="forms">
      <h3>Close my account</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Reconfirm your Email:</label>
          <br />
          <input type="email" name="email" onChange={handleChange} />
          <br />
          <div>
            <label htmlFor="accountClosure">Are you sure</label>
            <br />           
            <br />
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
   
    </div>
  );
};

export default AccountClosure;
