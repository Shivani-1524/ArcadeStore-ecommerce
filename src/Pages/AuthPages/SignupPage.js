import React from 'react'
import './AuthPage.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FormInput, Navbar } from './index.js'
import { useAuth } from '../../Contexts/UserProvider'
const axios = require('axios');

const SignupPage = () => {
    const navigate = useNavigate()
    const [userExistError, setUserExistError] = useState(false);
    const [signupError, setSignupError] = useState(false);
    const [signupData, setSignupData] = useState({
        firstName: '', lastName: '', email: '', password: '',
    });
    const { setIsLoggedIn } = useAuth()
    const handleUserSignup = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(
                '/api/auth/signup',
                { ...signupData }
            )
            if (res.status === 200) {
                setIsLoggedIn(res.data.encodedToken)
                localStorage.setItem("userToken", res.data.encodedToken);
                setUserExistError(false)
                setSignupError(false)
                navigate("/")
            }
        } catch (error) {
            setIsLoggedIn(false)
            setSignupError(true)
            if (error.response.status === 422) {
                setSignupError(false)
                setUserExistError(true)
                return;
            }
        }
    }


    return (
        <div>
            <Navbar />
            <div className="auth-container">
                <div className="auth-card">
                    <p className="md-title center-txt">Sign Up</p>
                    <form>
                        <div className="input-flex-row mg-t-10">
                            <FormInput onChange={(e) => setSignupData(prev => ({ ...prev, firstName: e.target.value }))}
                                props={{ labelFor: 'firstName', labelTitle: 'First Name', placeholderText: 'Enter First Name', objKey: 'firstName', inputTypr: 'text', inputVal: signupData.firstName }} />

                            <FormInput onChange={(e) => setSignupData(prev => ({ ...prev, lastName: e.target.value }))}
                                props={{ labelFor: 'lastName', labelTitle: 'Last Name', placeholderText: 'Enter Last Name', objKey: 'lastName', inputType: 'text', inputVal: signupData.lastName }} />
                        </div>
                        <FormInput onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                            props={{ labelFor: 'email', labelTitle: 'Email', placeholderText: 'Enter email address', objKey: 'email', inputType: 'email', inputVal: signupData.email }} />

                        <FormInput onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                            props={{ labelFor: 'password', labelTitle: 'Password', placeholderText: "6+ characters", objKey: 'password', inputType: 'password', inputVal: signupData.password }} />

                        <div className="flex-between">
                            <div className="flex-between mg-t-20">
                                <div className="check-container">
                                    <input type="checkbox" id="tnc-chk" htmlFor="tnc-chk" />
                                    <label htmlFor="tnc-chk">Accept all the T&C</label>
                                </div>
                            </div>
                            <Link to='/login'>
                                <p className='violet-txt bold mg-t-20'>
                                    Existing User? Login
                                </p>
                            </Link>
                        </div>
                        <button type="submit" onClick={(e) => handleUserSignup(e)} className="btn primary-btn solid mg-t-20">
                            Sign Up
                        </button>
                    </form>
                    {userExistError && <p className='orange-txt bold center-txt sm-txt mg-t-10'>User already exists. Please try logging in.</p>}
                    {signupError && <p className='orange-txt bold center-txt sm-txt mg-t-10'>An Error ocurred. Please try again later.</p>}
                </div>

            </div>
        </div>
    )
}

export default SignupPage