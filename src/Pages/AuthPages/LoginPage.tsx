import axios from 'axios';
import './AuthPage.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FormInput, Navbar } from './index'
import { validateLoginForm } from '../../Util/FormValidators';
import { useAuth } from '../../Contexts/UserProvider'
import { FormErrorsType} from '../../Components/FormInput';
import { loginUser } from '../../Util/AuthUtilities';


export type LoginDataValues = {
    email: string, password: string,
}

const LoginPage = () => {
    const navigate = useNavigate()
    const {setIsLoggedIn} = useAuth()
    const initialLoginValues = {
        email: '', password: '',
    }
  
   

    const [loginData, setLoginData] = useState<LoginDataValues>(initialLoginValues)
    const [formErrors, setFormErrors] = useState<FormErrorsType>({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [authError, setAuthError] = useState('')
   

    const handleUserLogin = async (e : React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        console.log("LOGIN Data",loginData)
        const errorObj = validateLoginForm(loginData)
        setFormErrors(errorObj);
        setIsSubmit(true);
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleGuestLogin = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setLoginData({
            email: "test@email.com",
            password: "test",
        })
        setFormErrors({});
        setIsSubmit(true);
    }
      
    
        useEffect(() => {
            if (Object.keys(formErrors).length === 0 && isSubmit) {
                console.log("LOGIN DATA IS VALID");
                (async () => {
                    try {
                        const {data, success} = await loginUser(loginData)
                        console.log("LOGIN API RES",data)
                        if (success) {
                            setIsLoggedIn(data.encodedToken);
                            localStorage.setItem("userToken", data.encodedToken);
                            navigate('/')
                        }else{
                            throw data
                        }
                    } catch (err:unknown) {
                        console.error(err)
                       if(err instanceof Error) {
                        const msg = err.message
                        if(msg == "Request failed with status code 404") setAuthError("Your email is not valid")
                        else if(msg == "Request failed with status code 401") setAuthError("invalid credentials please try again")
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
                        <p className="md-title center-txt">Sign In</p>
                        <form>
                            <FormInput onChange={handleChange} formErrors={formErrors}
                                props={{ labelFor: 'email', labelTitle: 'Email', value: loginData.email, placeholderText: 'Enter your email', inputType: 'text' }} />
                            <FormInput onChange={handleChange} formErrors={formErrors}
                                props={{ labelFor: 'password', value: loginData.password, labelTitle: 'Password', placeholderText: "Enter test", inputType: 'password' }} />
                            {authError && <p className='orange-txt bold sm-txt mg-t-20'>{authError}</p>}
                            <div>
                                <button type="submit" onClick={handleGuestLogin} className="btn primary-btn solid mg-t-30">
                                    Sign In as a Guest
                                </button>
                                <button type="submit" onClick={handleUserLogin} className="btn primary-btn solid mg-t-10">
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <Link to="/signup">
                            <button className="btn warning-outlined-btn mg-t-10 btn-darkbg">
                                New User? Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

export default LoginPage