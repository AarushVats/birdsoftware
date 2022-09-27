import React from 'react'
import './style.css';
import Signform from './Signform';


const SignUp = () => {
    return (
        <>
            <div className="main">
                {/* company details */}
                <div className="signup-page">


                    <div id="about-comp">
                        <div className="logo">
                        </div>
                        <div className="s-title">
                            <div className="t-text">
                                <h2>Registration
                                    <br /> Become a partner</h2>
                                <div className="s-details">
                                    <h5> RAMAERA is the future of upcoming Industrialisation in India,aiming presence in all kind of manufacturing sector’s
                                    </h5>
                                </div>
                            </div>
                        </div>


                    </div>


                    {/* signup form */}
                    <div id="signup">
                        <Signform/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp