import React from 'react';


function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 '>
                    <img src='media/images/largestBroker.svg' className='hero' />
                </div>
                <div className='col-md-6 mt-5 mb-5'>
                    <h1  className='fs-2'>Largest stock broker in India</h1>
                    <p >1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                     <div className='row'>
                        <div className='col-6 p-4'>
                            <ul>
                                <li className='mb-3'>Futures and Options</li>
                                <li className='mb-3'>Commodity derivatives</li>
                                <li className='mb-3'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6 p-4'>
                            <ul>
                                <li className='mb-3'>Stocks & IPOs</li>
                                <li className='mb-3'>Direct mutual funds</li>
                                <li className='mb-3'>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                        <img src='media\images\pressLogos.png' style={{width:"90%"}}/>
                     </div>
                    
                    
                </div>
            </div>
        </div>
     );
}

export default Awards;