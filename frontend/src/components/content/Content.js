import "./content.css";

import React from "react";
import banking from "../../images/Home-loan.jpg";
import invest from "../../images/invest.jpg";
import loans from "../../images/pexels-gabriel-hohol-3593947.jpg";
import offers from "../../images/pexels-maitree-rimthong-1602726.jpg";

function Content() {
  return (
    <div className="content">
      <div className="banking homeContent">
        <img src={banking} alt="bank" />
      <h2>Home loans</h2> 
      </div>
      <div className="invest  homeContent">
        <img src={invest} alt="invest" />
        <h2>Investment</h2> 
      </div>
      <div className="loans homeContent">
        <img src={loans} alt="loans" />
        <h2>miscellaneous</h2> 
      </div>
      <div className="offers homeContent">
        <img src={offers} alt="offers" />
        <h2>Savings</h2> 
      </div>
    </div>
  );
}

export default Content;
