
import { FormErrorsType, FormValuesType } from "../Components/FormInput";

export const validateSignupForm = (values: FormValuesType) => {
    let errors = {} as FormErrorsType;
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    if (!values.firstName) {
        errors.firstName = "First Name is required"
    }
    if (!values.lastName) {
        errors.lastName = "Last Name is required"
    }
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!regex.test(values.email)) {
        errors.email = "Invalid Email Format"
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters"
    }
    if (!values.tncChk) {
        errors.tncChk = "Please Accept the T&C to Proceed"
    }
    return errors;
}

export const validateLoginForm = (values : FormValuesType) => {
    let errors = {} as FormErrorsType
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    if (!values.email) {
        errors.email = "Email is required"
    }else if (!regex.test(values.email)) {
        errors.email = "Invalid Email Format"
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters"
    }
    console.log("login errors",errors)
    return errors
}