import React from "react";
import './homecard01.styles.css';

const card01 =()=>
{
  return(
      <div className='section01'>
          <div className='cont01'>
              <div className='overlay'>
              <h1>Clothware</h1>
               </div>
          </div>
          <div className='cont02'>
              <div className='overlay'>
                  <h1>Footware</h1>
              </div>
          </div>
          <div className='cont03'>
              <div className='overlay'>
                  <h1>Jewelry</h1>
              </div>
          </div>
      </div>
  )
}

export default card01;