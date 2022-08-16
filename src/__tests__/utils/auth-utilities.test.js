import { loginUser, signupUser } from "../../Util/AuthUtilities";
import * as axios from 'axios';

jest.mock('axios')

describe("test user login authentication", () => {
    test("should login user if successful", async () => {
        axios.post.mockResolvedValue({
            status: 200,
            data: {
                encodedToken: '12345'
            }
        })
        const response = await loginUser({ email: 'hhh@email.com', password: '12345' });
        expect(response).toEqual({
            success: true,
            errMessage: '',
            data: {
                encodedToken: '12345'
            }
        })
    })

    test("should catch error if login fails", async () => {
        axios.post.mockRejectedValue({ isAxiosError: true, data: { errorMessage: "user cannot be logged in" } })
        const res = await loginUser({ email: 'hhh@email.com', password: '12345' })
        expect(res).toEqual({
            data: { isAxiosError: true, data: { errorMessage: "user cannot be logged in" } },
            success: false,
            errMessage: "login error ocurred. please try again."
        });
    })

    test("should throw error if status code is not ok", async () => {
        axios.post.mockResolvedValue({
            status: 400,
            data: {
                errorMessage: "user cannot be logged in"
            }
        })
        const res = await loginUser({ email: 'hhh@email.com', password: '12345' })
        expect(res).toEqual({
            data: { code: 400 },
            success: false,
            errMessage: "login error ocurred. please try again."
        })
    })


})


describe("test user signup authentication", () => {
    test("should signup user if successful", async () => {
        axios.post.mockResolvedValue({
            status: 201,
            data: {
                encodedToken: '12345'
            }
        })
        const response = await signupUser(
            {
                firstName: 'tester',
                lastName: 'testsur',
                email: 'test@email.com',
                password: 'testing',
                tncChk: true
            });
        expect(response).toEqual({
            success: true,
            errMessage: '',
            data: {
                encodedToken: '12345'
            }
        })
    })

    test("should catch error if signup fails", async () => {
        axios.post.mockRejectedValue({ isAxiosError: true, data: { errorMessage: "user cannot be signed up" } })
        const res = await signupUser({ email: 'hhh@email.com', password: '12345' })
        expect(res).toEqual({
            data: { isAxiosError: true, data: { errorMessage: "user cannot be signed up" } },
            success: false,
            errMessage: "signup error ocurred. please try again."
        });
    })

    test("should throw error if status code is not ok", async () => {
        axios.post.mockResolvedValue({
            status: 400,
            data: {
                errorMessage: "user cannot be signed up"
            }
        })
        const res = await signupUser({ email: 'hhh@email.com', password: '12345' })
        expect(res).toEqual({
            data: { code: 400 },
            success: false,
            errMessage: "signup error ocurred. please try again."
        })
    })


})