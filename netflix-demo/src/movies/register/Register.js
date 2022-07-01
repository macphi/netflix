import React from "react";
import { Link } from 'react-router-dom'
import './register.scss'

const RegisterPages = () => {
    // // OnClick
    // // Email and Password
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const emailRef = useRef()
    // const passwordRef = useRef()
    // // Click email
    // const handleStart = () => {
    //     setEmail(emailRef.current.value)
    // }
    // // Click password
    // const handleFinish = () => {
    //     setPassword(passwordRef.current.value)
    // }
    // OnClick
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="" />

                </div>
            </div>

            <div className="container">
                {/* <Link to='../login'>
                    <button className="loginButton">
                        Sign In
                    </button>
                </Link> */}
                <h1>Unlimited movies, TV shows, and more</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className="input">
                    {/* ref={emailRef} */}
                    <input type="email" placeholder="Email address" />
                    <Link to='/home'>
                        <button className="registerButton">
                            Get Started
                        </button>

                    </Link>
                </div>
                {/* LoGIN FORM EMAIL */}
                {/* {
                    !email ? (
                        <div className="input">
                            <input type="email" placeholder="Email address" ref={emailRef} />
                            <button onClick={handleStart} className="registerButton">
                                Get Started
                            </button>
                        </div>
                    ) : (
                        <form className="input">
                            <input type="password" placeholder="Password" ref={passwordRef} />
                            <button className="registerButton" onClick={handleFinish}> Start </button>
                        </form>)
                } */}

            </div>
        </div>
    )
}

export default React.memo(RegisterPages)
