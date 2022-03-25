import React from 'react'
import './auth-pages.css'
import Navbar from '../../Components/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
const axios = require('axios');

const LoginPage = () => {
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({ email: '', password: '' })
    const handleUserLogin = async () => {
        try {
            const res = await axios.post('/api/auth/login', { ...loginData })
            console.log(res.data)
            if (res.status === 200) {
                navigate(-1)
            }
            localStorage.setItem("userToken", res.data.encodedToken);
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <Navbar />
            <div className="auth-container">
                <div className="auth-card">
                    <p className="md-title center-txt">Log In</p>
                    <div className="mg-t-20">
                        <label className="input-label sm-title" htmlFor="name">Email</label>
                        <input className="user-input" onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))} id="name" type="email" placeholder="Enter test@email.com" />
                    </div>
                    <div className="mg-t-10">
                        <label className="input-label sm-title" htmlFor="password">Password</label>
                        <input className="user-input" onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))} id="password" type="password" placeholder="Enter test" />
                    </div>
                    <div className="flex-between mg-t-20">
                        <div className="check-container">
                            <input type="checkbox" id="rememberme" htmlFor="rememberme" />
                            <label htmlFor="rememberme">Remember me</label>
                        </div>
                        <p className="orange-txt forgot-pswd">Forgot Your Password?</p>
                    </div>
                    <button onClick={handleUserLogin} className="btn primary-btn solid mg-t-20">
                        Log In
                    </button>

                    <Link to="/signup">
                        <button className="btn warning-outlined-btn mg-t-10">
                            New User? Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage