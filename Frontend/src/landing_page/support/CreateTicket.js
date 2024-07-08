import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container-fluid p-5 border-top padding'>
            <div className='row p-5 padding' >
                <p   className='fs-4 p-5'>To create a ticket, select a relevant topic</p>
            </div>
            <div className='row  p-5' style={{marginTop:"-5rem"}}>
                <div className='col-md-4  p-5'>
                    <p className='fs-4'><i class="fa fa-plus-circle" aria-hidden="true"></i> &nbsp; Account Opening</p>
                    <a href='' >Getting started</a> <br />
                    <a href='' >Online</a><br />
                    <a href='' >Offline</a><br />
                    <a href='' >Charges</a><br />
                    <a href='' > Company, Partnership and HUF</a><br />
                    <a href='' >Non Resident Indian (NRI)</a><br />
                </div>
                <div className='col-md-4  p-5'>
                    <p className='fs-4'><i class="fa fa-user" aria-hidden="true"></i> &nbsp; Your Zerodha Account</p>
                    <a href='' >Login credentials</a><br/>
                    <a href='' >Your Profile</a><br />
                    <a href='' >Account modification and segment addition</a><br />
                    <a href='' >CMR & DP ID</a><br />
                    <a href='' >Nomination</a><br />
                    <a href='' >Transfer and conversion of shares</a><br />
                </div>
                <div className='col-md-4  p-5'>
                    <p className='fs-4'> <i class="fa fa-bar-chart" aria-hidden="true"></i> &nbsp; Trading and Markets</p>
                    <a href='' >Trading FAQs</a><br />
                    <a href='' >Kite</a><br />
                    <a href='' >Margins</a><br/>
                    <a href='' >Product and order types</a><br/>
                    <a href='' >Corporate actions</a><br/>
                    <a href=''>Kite features</a><br/>
                </div>
                
            </div>
            <div className='row  p-5'>

                <div className='col-md-4  p-5' >
                    <p className='fs-4'><i class="fa fa-archive" aria-hidden="true"></i> &nbsp;Funds</p>
                    <a href=''>Fund withdrawal</a><br/>
                    <a href=''>Adding funds</a><br/>
                    <a href=''>Adding bank accounts</a><br/>
                    <a href=''>eMandates</a><br/>
                </div>
                    

                <div className='col-md-4 p-5' >
                    <p className='fs-4'><i class="fa fa-check-circle-o" aria-hidden="true"></i> &nbsp;Console</p>
                    <a href=''>IPO</a><br/>
                    <a href=''>Portfolio</a><br/>
                    <a href=''>Funds statement</a><br/>
                    <a href=''>Profile</a><br/>
                    <a href=''>Reports</a><br/>
                    <a href=''>Referral program</a><br/>
                </div>    

                <div className='col-md-4  p-5' >
                    <p className='fs-4'><i class="fa fa-circle-thin" aria-hidden="true"></i> &nbsp;Coin</p>
                    <a href=''>Understanding mutual funds and Coin</a><br/>
                    <a href=''>Coin app</a><br/>
                    <a href=''>Coin web</a><br/>
                    <a href=''>Transactions and reports</a><br/>
                    <a href=''>National Pension Scheme (NPS)</a><br/>
                </div>
            </div>
            
            </div>
     );
}

export default CreateTicket;