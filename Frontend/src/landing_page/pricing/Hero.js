import React from "react";

function Hero() {
  return (
    <div className="container p-5 mt-5">
      <div className="row  text-center mt-5 p-5">
        <h1>Pricing</h1>
        <p className="fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>
      <div className="row border-top p-5 text-center mt-5">
        <div className="col-md-4 mt-5">
          <img src="media\images\pricing0.svg" alt="" style={{width:"70%"}}/>
          <h3>Free equity delivery</h3>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-md-4 mt-5">
          <img src="media\images\other-trades.svg" alt="" style={{width:"70%"}}/>
          <h3>Intraday and F&O trades</h3>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        
        </div>
        <div className="col-md-4 mt-5">
          <img src="media\images\pricing0.svg" alt="" style={{width:"70%"}}/>
          <h3>Free direct MF</h3>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
