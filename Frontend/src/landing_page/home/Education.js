import React from 'react';

function Education() {
    return (  
        <div  className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 p-5 text-center'>
                    <img src='media\images\education.svg' style={{width:"85%"}}/>
                    
                </div>
                <div className='col-md-6 p-5'>
                    <h1 className='mb-3 mt-2 fs-3'>Free and open market education</h1>
                    
                    <p className='mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' style={{textDecoration:"none"}} className='my-3'>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <br/><br/>
                    <p className='mb-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#' style={{textDecoration:"none"}} className='mb-5'>TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                
                </div>
                
            </div>
        </div>
    );
}

export default Education;
