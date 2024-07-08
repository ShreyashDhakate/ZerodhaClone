import React from "react";

function Brokerage() {
  return (
    <div className="container p-5 mt-5">
      <div className="row p-5 padding">
        <div className="col-md-8">
          <p className="text-center fs-4">
            {" "}
            <a href="">Brokerage calculator</a>
          </p>
          <ul className="" style={{fontSize:"0.9rem"}}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <p className="text-center fs-4">
            {" "}
            <a href="">List of Charges</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
