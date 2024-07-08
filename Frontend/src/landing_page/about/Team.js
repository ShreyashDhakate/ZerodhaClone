import React from "react";

function Team() {
  return (
    <div className="container mt-5 p-5">
      <div className="row p-3 border-top">
        <h1 className="text-center fs-2 ">People</h1>
      </div>
      <div className="row mx-5" style={{ lineHeight: "1.8rem" }}>
        <div className="col-md-6 padding p-5 text-center text-muted">
          <img
            src="media\images\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4>Nithin Kamath</h4>
          <h6>Founder,CEO</h6>
        </div>

        <div className="col-md-6  padding mt-5">
        <p> Nithin bootstrapped and founded Zerodha 
            in 2010 to overcome the hurdles he faced during
            his decade long stint as a trader. Today, Zerodha 
            has changed the landscape of the Indian broking industry.</p>

        <p>He is a member of the SEBI Secondary Market Advisory 
            Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

        <p>Playing basketball is his zen.</p>

        <p>Connect on <a href="/">Homepage</a> / <a href="/">TradingQnA</a>  / <a href="/">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
