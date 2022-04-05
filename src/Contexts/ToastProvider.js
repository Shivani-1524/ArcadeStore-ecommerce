import { createContext, useContext, useReducer } from 'react'
import { toastReducer, initToastState } from '../Reducers/ToastReducer'

const ToastContext = createContext()
const useToast = () => useContext(ToastContext)

const ToastProvider = ({ children }) => {
    const [toastState, dispatchToast] = useReducer(toastReducer, initToastState)

    return (
        <ToastContext.Provider value={{ toastState, dispatchToast }}>
            {children}
        </ToastContext.Provider>
    )
}

export { ToastProvider, useToast }