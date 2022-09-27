import React from 'react'
import { Link } from 'react-router-dom';

const Signform = () => {
    return (
        <div>
            <div className="sign-box">
                <div className="langauge">English (UK) <img src="src/Components/img/polygon.png" alt="" /></div>
                <div className="form">
                    <div className="formhead">
                        <div className="formtitle">
                            Register Individual Account!
                        </div>
                        <div className="formdetail">
                            For the purpose of industry regulation, your details are required.
                        </div>
                    </div>
                    <div className="forminput">
                        <input className='data' type="text" id="fname" name="fname" placeholder='First name' />
                        <input className='data' type="text" id="lname" name="lname" placeholder='Last name' />
                        <input className='data' type="email" id="email" name="email" placeholder='Email' />
                        <input className='data' type="text" id="refid" name="refid" placeholder='referal-ID' />
                        <input className='data' type="password" id="password" name="password" placeholder='Password' />
                    </div>
                    <Link to="/verify"> <button className="btn">Sign up</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Signform