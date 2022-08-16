import axios from 'axios'
import { LoginDataValues} from '../Pages/AuthPages/LoginPage'
import {SignupDataType } from '../Pages/AuthPages/SignupPage'


const loginUser = async (loginData : LoginDataValues) => {
try{
    const res = await axios.post('/api/auth/login', { ...loginData })
    if (res.status === 200) {
        return{
            data: res.data,
            success: true,
            errMessage: ''
        }
    }
    const errorObj =  { code : res.status};
    throw errorObj;
}catch(err){
    console.error(err)
        return { 
            data: err,
            success: false,
            errMessage: "login error ocurred. please try again." };
}
}

const signupUser = async(signupData : SignupDataType) => {
    try{
        const res = await axios.post(
            '/api/auth/signup',
            { ...signupData }
        )
        if (res.status === 201) {
            return{
                data: res.data,
                success: true,
                errMessage: ''
            }
        }
        const errorObj =  { code : res.status};
        throw errorObj;
    }catch(err){
        console.error(err)
            return { 
                data: err,
                success: false,
                errMessage: "signup error ocurred. please try again." };
    }
}

export {loginUser, signupUser}