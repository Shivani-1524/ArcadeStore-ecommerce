import { toastReducer, initToastState } from "../../Reducers/ToastReducer";

describe("testing toast reducer", () => {


    it("should add a warning toast", () => {
        const addToToastlist = {
            type: "ADD_TOAST",
            payload: {
                toastType: "TOAST_WARNING",
                title: "Product Added To Cart"
            }
        }
        const state = toastReducer(initToastState, addToToastlist)
        expect(state).toEqual({
            toastList: [{
                title: "Product Added To Cart",
                id: 1,
                toastIcon: 'fa-exclamation-circle',
                toastClass: 'warning-toast'
            }]
        })
    })

    it("should contain error toast", () => {
        const addToToastlist = {
            type: "ADD_TOAST",
            payload: {
                toastType: "TOAST_ERROR",
                title: "Unexpected Error ocurred"
            }
        }
        const state = toastReducer(initToastState, addToToastlist)
        expect(state).toEqual({
            toastList: [{
                id: 1,
                title: 'Unexpected Error ocurred',
                toastIcon: 'fa-exclamation-triangle',
                toastClass: 'danger-toast'
            }]
        })
    })

    it("should contain success toast", () => {
        const addToToastlist = {
            type: "ADD_TOAST",
            payload: {
                toastType: "TOAST_SUCCESS",
                title: "Success"
            }
        }
        const state = toastReducer(initToastState, addToToastlist)
        expect(state).toEqual({
            toastList: [{
                id: 1,
                title: 'Success',
                toastIcon: 'fa-check-circle',
                toastClass: 'success-toast'
            }]
        })
    })

    it("should contain default toast", () => {
        const addToToastlist = {
            type: "ADD_TOAST",
            payload: {
                toastType: "DEFAULT",
                title: "Product Added To Cart"
            }
        }
        const state = toastReducer(initToastState, addToToastlist)
        expect(state).toEqual({
            toastList: [{ id: 1, title: '', toastIcon: 'fa-exclamation-circle', toastClass: 'warning-toast' }]
        })
    })

    it("should remove a toast", () => {
        const initToastStateTest = {
            toastList: [{
                title: "Product Added To Cart",
                id: 1,
                toastIcon: 'fa-exclamation-circle',
                toastClass: 'warning-toast'
            }, {
                title: "Removed From Cart",
                id: 2,
                toastIcon: 'fa-exclamation-circle',
                toastClass: 'warning-toast'
            }]
        }
        const removeToast = {
            type: 'REMOVE_TOAST',
            payload: { toastId: 1 }
        }
        const state = toastReducer(initToastStateTest, removeToast)
        expect(state).toEqual({
            toastList: [{
                title: "Removed From Cart",
                id: 2,
                toastIcon: 'fa-exclamation-circle',
                toastClass: 'warning-toast'
            }]
        })

    })
})