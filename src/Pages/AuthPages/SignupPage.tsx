import axios from 'axios';
import './AuthPage.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FormInput, Navbar } from './index'
import {validateSignupForm} from '../../Util/FormValidators'
import { useAuth } from '../../Contexts/UserProvider'
import { FormErrorsType } from '../../Components/FormInput';


const SignupPage = () => {
    const { setIsLoggedIn } = useAuth()
    const navigate = useNavigate()
    type SignupDataType = {
        firstName: string, lastName: string, email: string, password: string, tncChk: boolean 
    }
    const initialSignupValues = {
        firstName: '', lastName: '', email: '', password: '', tncChk: false
    }
    const [signupData, setSignupData] = useState<SignupDataType>(initialSignupValues);
    const [formErrors, setFormErrors] = useState<FormErrorsType>({});
    const [authError, setAuthError] = useState('')
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        name !== "tncChk" ? setSignupData({ ...signupData, [name]: value }) : setSignupData({ ...signupData, [name]: e.target.checked })
    }

    const handleUserSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errorObj = await validateSignupForm(signupData)
        setFormErrors(errorObj);
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            (async () => {
                try {
                    const res = await axios.post(
                        '/api/auth/signup',
                        { ...signupData }
                    )
                    if (res.status === 201) {
                        setIsLoggedIn(res.data.encodedToken)
                        localStorage.setItem("userToken", res.data.encodedToken);
                        navigate("/")
                    }
                } catch (err:unknown) {
                    if(err instanceof Error) {
                     const msg = err.message
                     if(msg == "Request failed with status code 422") setAuthError("Email already exists. Please Login.")
                     else setAuthError("Something went wrong. Please try again later.")
                    }
                     setIsLoggedIn(false)
                 }
            })()
        }
    }, [formErrors, isSubmit])

    return (
        <div>
            <Navbar />
            <div className="auth-container">
                <div className="auth-card">
                    <p className="md-title center-txt">Sign Up</p>
                    <form onSubmit={handleUserSignup}>
                        <div className="input-flex-row mg-t-10">
                            <FormInput onChange={handleChange} formErrors={formErrors}
                                props={{value: signupData.firstName, labelFor: 'firstName', labelTitle: 'First Name', placeholderText: 'Enter First Name', inputType: 'text' }} />
                            <FormInput onChange={handleChange} formErrors={formErrors}
                                props={{value: signupData.lastName, labelFor: 'lastName', labelTitle: 'Last Name', placeholderText: 'Enter Last Name', inputType: 'text' }} />
                        </div>
                        <FormInput onChange={handleChange} formErrors={formErrors}
                            props={{value: signupData.email, labelFor: 'email', labelTitle: 'Email', placeholderText: 'Enter email address', inputType: 'email' }} />

                        <FormInput onChange={handleChange} formErrors={formErrors}
                            props={{value: signupData.password, labelFor: 'password', labelTitle: 'Password', placeholderText: "6+ characters", inputType: 'password' }} />
                        
                        <div className="flex-between">
                            <div className="flex-between mg-t-20">
                                <div className="check-container">
                                    <input name='tncChk' onChange={handleChange} type="checkbox" id="tncChk" />
                                    <label htmlFor="tncChk">Accept T&C</label>
                                </div>
                            </div>
                            <Link to='/login'>
                                <p className='violet-txt bold mg-t-20'>
                                    Existing User? Login
                                </p>
                            </Link>
                        </div>
                        {formErrors && <p className="mg-t-10 orange-txt">{formErrors.tncChk}</p>}
                        {authError && <p className='orange-txt bold sm-txt mg-t-20'>{authError}</p>}
                        <button type="submit"
                            className="btn primary-btn solid mg-t-20">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupPage