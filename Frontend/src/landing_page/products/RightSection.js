import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row  d-flex align-items-center">
        <div className="col-md-5 p-5 mt-5">
          <h1 className="fs-2 ">{productName}</h1>
          <p style={{ lineHeight: "2rem", fontSize: "1.1rem" }}>
            {productDescription}
          </p>
          <div className="mt-4">
            <a href={tryDemo}>Try Demo →</a>
            <a href={learnMore} style={{ marginLeft: "2rem" }}>
              Learn More →
            </a>
          </div>
        </div>
        <div className="col-md-7  p-4">
          <img src={imageURL} alt="" className="product-img-r"/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
