import React from 'react'
import './Login.css'
import logo from '../../images/Group 475.svg'
import { Link } from 'react-router-dom'

function Loging() {
    return (
        <div className='loging'>
            <div className="login__bg">
                <div className="loging__top container">
                    <h2>Lohin</h2>
                    <Link to={"/"}>
                        <h2 className='back'>Home-Login</h2>
                    </Link>
                </div>
            </div>
            <div className="login__card">
                <img src={logo} alt="" />
                <form className='login__form' action="">
                    <label>Username</label>
                    <input className='inp' type="text" placeholder='Email or Phone Number' required />
                    <label>Password</label>
                    <input className='inp' type="password" placeholder='password' required />
                </form>
                <div className="cask">
                    <span className='custom-checkbox'>
                        <h4>Remember Me</h4>
                    </span>
                    <h3>Forgot Password?</h3>
                </div>
                <button className='login'>Login</button>
            </div>
        </div>
    )
}

export default Loging