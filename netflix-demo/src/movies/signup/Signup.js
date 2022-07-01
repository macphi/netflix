import React from "react";
import { Link } from 'react-router-dom'
import './signup.scss'

const RegisterPages = () => {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="" />
                </div>
            </div>
            <div className="container">
                <form action="">
                    <h1>Sign Up</h1>
                    <input type="email" placeholder="Email or phone number" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <input type="password" placeholder="Re-ingressu password" />
                    <br />
                    <Link to='/home'>
                        <button className="loginButton">Sign up </button>
                    </Link>
                    <span>
                        Already have an account ?
                        <Link to='/login'>
                            <b>     Log In now</b>
                        </Link>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you are not a bot. <b>Learn more</b>
                    </small>
                </form>
            </div>
        </div>
    )
}

export default React.memo(RegisterPages)
