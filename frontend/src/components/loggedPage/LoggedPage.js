import "./logged.css";
import Transactions from "../transaction/Transactions";
import View from "../view/View";

function LoggedPage() {
  return (
    <div className="forms content" >
      <div className="logBlock">
        <h3>Last five transaction</h3>
      {/*   <form>
          <input type="email" />
          <input type="submit" />
        </form> */}
      </div>
      <div className="logBlock">
        <h3>Transactions  withdraw / deposit</h3>
        <Transactions/>
      </div>
      <div className="logBlock">
        <h3>View and Edit Account</h3>
        <View/>
      </div>
    
    </div>
  );
}

export default LoggedPage;
