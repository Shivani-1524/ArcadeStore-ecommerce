import React from 'react'
import './auth-pages.css'
import Navbar from '../../Components/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import FormInput from './AuthComponents/FormInput'
const axios = require('axios');

const SignupPage = () => {
    const navigate = useNavigate()
    const [userExistError, setUserExistError] = useState(false);
    const [signupError, setSignupError] = useState(false);
    const [signupData, setSignupData] = useState({
        firstName: '', lastName: '', email: '', password: '',
    });
    const handleUserSignup = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(
                '/api/auth/signup',
                JSON.stringify({ ...signupData })
            )
            console.log(res)
            if (res.status === 200) {
                localStorage.setItem("userToken", res.data.encodedToken);
                navigate("/")
                setUserExistError(false)
                setSignupError(false)
            }
        } catch (error) {
            setSignupError(true)
            if (error.response.status === 422) {
                setSignupError(false)
                setUserExistError(true)
                return;
            }
        }
    }

    // const formFieldData = [
    //     { labelFor: 'firstName', labelTitle: 'First Name', placeholderText: 'Enter First Name', objKey: 'firstName' },
    //     { labelFor: 'lastName', labelTitle: 'Last Name', placeholderText: 'Enter Last Name', objKey: 'lastName' },
    //     { labelFor: 'email', labelTitle: 'Email', placeholderText: 'Enter email address', objKey: 'email' },
    //     { labelFor: 'password', labelTitle: 'Password', placeholderText: "6+ characters", objKey: 'password' }
    // ]

    return (
        <div>
            <Navbar />
            <div className="auth-container">
                <div className="auth-card">
                    <p className="md-title center-txt">Sign Up</p>
                    <form>
                        <div className="input-flex-row mg-t-10">
                            <FormInput onChange={(e) => setSignupData(prev => ({ ...prev, firstName: e.target.value }))}
                                props={{ labelFor: 'firstName', labelTitle: 'First Name', placeholderText: 'Enter First Name', objKey: 'firstName', inputTypr: 'text' }} />

                            <FormInput onChange={(e) => setSignupData(prev => ({ ...prev, lastName: e.target.value }))}
                                props={{ labelFor: 'lastName', labelTitle: 'Last Name', placeholderText: 'Enter Last Name', objKey: 'lastName', inputType: 'text' }} />
                        </div>
                        <FormInput onChange={(e) => setSignupData(prev => ({ ...prev, lastName: e.target.value }))}
                            props={{ labelFor: 'email', labelTitle: 'Email', placeholderText: 'Enter email address', objKey: 'email', inputType: 'email' }} />

                        <FormInput onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                            props={{ labelFor: 'password', labelTitle: 'Password', placeholderText: "6+ characters", objKey: 'password', inputType: 'password' }} />

                        <div className="flex-between">
                            <div className="flex-between mg-t-20">
                                <div className="check-container">
                                    <input type="checkbox" id="rememberme" htmlFor="rememberme" />
                                    <label htmlFor="rememberme">Remember me</label>
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