import React from 'react'
import './AuthPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import FormInput from './AuthComponents/FormInput'
const axios = require('axios');

const LoginPage = () => {
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({ email: '', password: '' })
    const [loginError, setLoginError] = useState(false);
    const [userNotFoundError, setUserNotFoundError] = useState(false);

    const handleUserLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/auth/login', { ...loginData })
            console.log(res)
            if (res.status === 200) {
                setLoginError(false)
                setUserNotFoundError(false)
                navigate('/')
            }
            localStorage.setItem("userToken", res.data.encodedToken);
        } catch (err) {
            setLoginError(true)
            if (err.response.status === 404) {
                setLoginError(false)
                setUserNotFoundError(true)
                return;
            }
        }
    }
    return (
        <div>
            <Navbar />
            <div className="auth-container">
                <div className="auth-card">
                    <p className="md-title center-txt">Log In</p>
                    <form>
                        <FormInput onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                            props={{ labelFor: 'email', labelTitle: 'Email', placeholderText: "Enter test@email.com", objKey: 'email', inputType: 'email' }} />
                        <FormInput onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                            props={{ labelFor: 'password', labelTitle: 'Password', placeholderText: "Enter test", objKey: 'password', inputType: 'password' }} />

                        {/* <div className="mg-t-20">
                            <label className="input-label sm-title" htmlFor="name">Email</label>
                            <input className="user-input" required onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))} id="name" type="email" />
                        </div> */}
                        {/* <div className="mg-t-10">
                            <label className="input-label sm-title" htmlFor="password">Password</label>
                            <input className="user-input" required onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))} id="password" type="password" placeholder="Enter test" />
                        </div> */}
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

                    </form>


                    <Link to="/signup">
                        <button className="btn warning-outlined-btn mg-t-10">
                            New User? Sign Up
                        </button>
                    </Link>
                </div>
                {userNotFoundError && <p className='mg-t-20 orange-txt bold'>User not Found. Please try again.</p>}
                {loginError && <p className='orange-txt bold sm-txt mg-t-20'>An Error ocurred. Please try again later.</p>}
            </div>
        </div>
    )
}

export default LoginPage