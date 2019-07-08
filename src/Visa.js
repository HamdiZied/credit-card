import React from 'react';
import puslogo from './pus.png';
import masterlogo from './master.jpg';


const Visa=()=>{
    return(
   <div className="card">
        <div className="header_card">
            <h1>CREDIT CARD</h1>
        </div>
         <img className="logo-pus" src={puslogo} />
         <div className="main-carte">
             <div className="ref-card">
                   <div className="num-card">
                        <strong> 7897  4521  4456  2700</strong>
                   </div>   
                   <div className="date-card">
                          <h2>4512</h2>
                          <h2>50/11</h2>
                  </div>
                   <div class="name-carte">
                      <h4>CARDHOLDER</h4>
                  </div>
            </div>
            <img className="master" src={masterlogo} />
            
        </div>
    </div>    
    )
} 
export default Visa;
