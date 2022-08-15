import React, { useEffect } from 'react'
import './Toast.css'
import { useToast } from '../../Contexts/ToastProvider'

const Toast = () => {
    const { dispatchToast, toastState } = useToast()

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastState.toastList.length) {
                dispatchToast({ type: 'REMOVE_TOAST', payload: { toastId: toastState.toastList[0].id } })
            }
        }, 3000);
        return () => {
            clearInterval(interval);
        }
    }, [toastState.toastList, dispatchToast]);

    return (
        <div className='bottom-right'>
            {toastState.toastList.map((toast, i) =>
                <div key={i} className={`toast ${toast.toastClass}`}>
                    <div className="flex-row">
                        <i className={`fas ${toast.toastIcon}`}></i>
                        <p className="sm-p bold">{toast.title}</p>
                    </div>
                    <i onClick={() => dispatchToast({ type: 'REMOVE_TOAST', payload: { toastId: toast.id } })} className="fas fa-times"></i>
                </div>
            )}
        </div>
    )
}

export default Toast