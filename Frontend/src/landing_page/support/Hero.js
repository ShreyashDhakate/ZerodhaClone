import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid p-5 padding mt-5"
      style={{ color: "white", backgroundColor: "#1976D2" }}
    >
      <div className="row p-5 padding">
        <div className="col mx-5">
          <h1 className="fs-4 text-start mb-5">Support Portal</h1>
          <p className="fs-3 text-start">
                Search for an answer or browse help topics to create a ticket
            </p>
            <div className="d-flex bg-light">
                <input
                class="form-control text-small form-control-lg"
                type="text"
                placeholder="Eg:how do i activate F&O, why is my order getting rejected ..."
                aria-label=".form-control-lg example"
                />
                <button className="btn text-muted">
                <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div className="col mx-5">
          <h1 className="fs-6 text-end " style={{ textDecoration: "underline" ,marginBottom:"4rem"}}>
            Track tickets
          </h1>
          <h2 className="fs-4 text-start mt-5">Featured</h2>
          <ol>
          <li style={{ textDecoration: "underline" }} className="mt-3"> Current Takeovers and Delisting - June 2024</li>
          <li style={{ textDecoration: "underline"}} className="mt-3"> Latest Intraday leverages and Square-off timings</li>
          </ol>
        
        
        </div>
      </div>
        <div className=" row mx-5">
          <div className="col col-md-9 mx-5" style={{marginTop:"-2.5rem"}}>
            <p>
              <a
                className="fs-6"
                style={{ textDecoration: "underline", color: "white" }}
              >
                Track account opening
              </a>

              <a
                className="fs-6 mx-4"
                style={{ textDecoration: "underline", color: "white" }}
              >
                Track segment activation
              </a>

              <a
                className="fs-6 mx-4"
                style={{ textDecoration: "underline", color: "white" }}
              >
                Intraday margins
              </a>

              <p>
                <a
                  className="fs-6"
                  style={{ textDecoration: "underline", color: "white" }}
                >
                  Kite user manual
                </a>
              </p>
            </p>
          </div>
          <div className="col col-md-5 mx-5"></div>
        </div>
      </div>
    
  );
}

export default Hero;
