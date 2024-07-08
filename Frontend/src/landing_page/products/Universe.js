import React from "react";

function Universe() {
  return (
    <div className="container text-center">
      <div className="row fs-5">
        <p className="mb-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="/product">Zerodha.tech</a> blog.
        </p>
      </div>

      <h1 className="fs-2 mt-5">The Zerodha Universe</h1>
      <p>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row mt-5 p-3">
        <div className="col-md-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt=""
            style={{ width: "10rem" }}
          />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-md-4 ">
          <img
            src="media/images/streakLogo.png"
            alt="#"
            style={{ width: "10rem" }}
          />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-md-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "10rem" }}
          />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "10rem" }}
          />
          <p className="text-small text-muted">Assset management</p>
        </div>
        <div className="col-md-4">
          <img
            src="media/images/goldenpiLogo.png"
            alt=""
            style={{ width: "10rem" }}
          />
          <p className="text-small text-muted">Fundamental research platform</p>
        </div>
        <div className="col-md-4">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "10rem" }}
          />
          <p className="text-small text-muted">Insurance</p>
        </div>
      </div>
      <button className='p-2 btn bg-primary fs-5 mt-5' style={{width: "15%", margin:" 0 auto", color: "white"}}>Sign up Now</button>
                
    </div>
  );
}

export default Universe;
