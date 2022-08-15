import { validateLoginForm, validateSignupForm } from '../../Util/FormValidators'


describe("should test login form validation", () => {
    test("if fields are present", () => {
        const res = validateLoginForm({
            email: '',
            password: '',
        })

        expect(res).toEqual({
            email: "Email is required",
            password: "Password is required",
        })
    })

    test("if correct input is given", () => {
        const res = validateLoginForm({
            email: 'notanemail',
            password: '123',
        })

        expect(res).toEqual({
            email: "Invalid Email Format",
            password: "Password must be more than 4 characters",
        })
    })

})


describe("should test signup form validation", () => {
    test("if fields are present", () => {
        const res = validateSignupForm({
            firstName: '',
            lastName: '',
            tncChk: false,
            email: '',
            password: '',
        })
        expect(res).toEqual({
            firstName: "First Name is required",
            lastName: "Last Name is required",
            tncChk: "Please Accept the T&C to Proceed",
            email: "Email is required",
            password: "Password is required",
        })
    })
    test("if correct input is given", () => {
        const res = validateSignupForm({
            firstName: 'name1',
            lastName: 'name2',
            tncChk: true,
            email: 'notanemail',
            password: '123',
        })

        expect(res).toEqual({
            email: "Invalid Email Format",
            password: "Password must be more than 4 characters",
        })
    })
})