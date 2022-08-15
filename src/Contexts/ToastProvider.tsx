import { createContext, useContext, useReducer } from 'react'
import { toastReducer, initToastState, Action, ToastState } from '../Reducers/ToastReducer'

type ProviderProps = {
    children: JSX.Element
}

interface ContextProps {
    toastState: ToastState;
    dispatchToast: (a:Action)=>void;
}

const defaultValue : ContextProps = {
    toastState: {toastList: []},
    dispatchToast: ()=>console.error("attempting to use Toast Context outside of a valid provider"),
}


const ToastContext = createContext<ContextProps>(defaultValue);
const useToast = () => useContext(ToastContext)

const ToastProvider = ({ children }: ProviderProps) => {
    const [toastState, dispatchToast] = useReducer(toastReducer, initToastState)

    return (
        <ToastContext.Provider value={{ toastState, dispatchToast }}>
            {children}
        </ToastContext.Provider>
    )
}

export { ToastProvider, useToast }