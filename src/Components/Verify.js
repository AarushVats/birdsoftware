import React from 'react'
import './style.css';

const Verify = () => {
  return (
    <>
      <div className="main">
        <div className="verify-page">

          <div className="v-logo">
          </div>
          <div className="head">
            <div className="headline">
              <div className="title">
                Ramaera Industries
              </div>
              <div className="lang">English (UK)</div>
            </div>

          </div>
          
          <div className="welcome">
            <div className="wel-msg">
              Welcome <span className="ramaera">Ramaera</span>, Please enrter the code sent to your registered mail ID
            </div>
          </div>
          <div className="e-box">
            <div className="box">
              <img src="src\Components\img\icon-park_email-down.png" alt="" />

            </div>
            <button className="btn-2">Open</button>

          </div>


        </div>

      </div>
    </>
  )
}

export default Verify