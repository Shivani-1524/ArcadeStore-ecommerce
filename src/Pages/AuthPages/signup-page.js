import React from 'react'
import './auth-pages.css'
import Navbar from '../../Components/Navbar/Navbar'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
const axios = require('axios');

const SignupPage = () => {
    const [signupData, setSignupData] = useState({
        firstName: '', lastName: '', email: '', password: '',
    });
    const handleUserSignup = async () => {
        console.log({ ...signupData })
        try {
            const res = await axios.post(
                '/api/auth/signup',
                { ...signupData }
            )
            localStorage.setItem("userToken", res.data.encodedToken);
            Navigate("/")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <Navbar />
            <div className="auth-container">
                <div className="auth-card">
                    <p className="md-title center-txt">Sign Up</p>
                    <div className="input-flex-row mg-t-10">
                        <div className="mg-t-20">
                            <label className="input-label sm-title" htmlFor="firstname">First Name</label>
                            <input onChange={(e) => setSignupData(prev => ({ ...prev, firstName: e.target.value }))} className="user-input" id="firstname" type="text" placeholder="Enter first name" />
                        </div>
                        <div className="mg-t-20">
                            <label className="input-label sm-title" htmlFor="lastname">Last Name</label>
                            <input onChange={(e) => setSignupData(prev => ({ ...prev, lastName: e.target.value }))} className="user-input" id="lastname" type="text" placeholder="Enter last name" />
                        </div>
                    </div>
                    <div className="mg-t-10">
                        <label className="input-label sm-title" htmlFor="email">Email</label>
                        <input className="user-input" onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))} id="email" type="email" placeholder="Enter email address" />
                    </div>
                    <div className="mg-t-10">
                        <label className="input-label sm-title" htmlFor="password">Password</label>
                        <input className="user-input" onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))} id="password" type="password" placeholder="6+ characters" />
                    </div>
                    <div className="flex-between mg-t-20">
                        <div className="check-container">
                            <input type="checkbox" id="rememberme" htmlFor="rememberme" />
                            <label for="rememberme">Remember me</label>
                        </div>
                    </div>
                    <button onClick={handleUserSignup} className="btn primary-btn solid mg-t-20">
                        Sign Up
                    </button>

                    <Link to='/login'>
                        <button className="btn warning-outlined-btn mg-t-10">
                            Existing User? Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignupPage