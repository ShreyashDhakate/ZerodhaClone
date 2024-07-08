import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return <div className="container p-5  mt-5">
    <div className="row padding">
        <div className="col-md-8 p-5">
            <img src={imageURL} alt="" className="product-img-l"/>
        </div>
        <div className="col-md-4 mt-5">
            <h1 className="fs-2">{productName}</h1>
            <p style={{lineHeight:"2rem", fontSize:"1.1rem"}}>{productDescription}</p>
            <div className="mt-4">
            <a href={tryDemo} >Try Demo →</a>
            <a href={learnMore} style={{marginLeft:"2rem"}}>Learn More →</a>
            
            </div>
            <div className="mt-4 d-flex">
            <a href={googlePlay} ><img src="media/images/googlePlayBadge.svg" alt=""/></a>
            <a href={appStore} ><img src="media/images/appstoreBadge.svg" style={{marginLeft:"2rem"}} alt=""/></a>
        
            </div>
        </div>
    </div>
  </div>;
}

export default LeftSection;
