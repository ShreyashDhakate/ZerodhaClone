import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row'>
                <div className='col text-center'>
                    <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5 col-12 hero' style={{width:"75%"}} />
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button className='p-2 btn bg-primary  fs-5 ' style={{width: "15%", margin:" 0 auto", color: "white"}}>Signup Now</button>
                
                </div>
            </div>
        </div>
     );
}

export default Hero;