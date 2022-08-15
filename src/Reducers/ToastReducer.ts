
export type ToastState = {
    toastList: ToastProperties[]
}
export type Action =  {
    type: 'REMOVE_TOAST';
    payload: {toastId: number}
} | {
    type: 'ADD_TOAST';
    payload: ToastPayload
};
export interface ToastPayload {
    toastType: string,
    title: string,
    toastId?: number,
}
interface ToastProperties {
    id: number | 0;
    title: string;
    toastIcon: string;
    toastClass: string;
}


const initToastState: ToastState = {
    toastList: []
}

const toastReducer = (state : ToastState, { type, payload } : Action) : ToastState => {
    let toastProperties : ToastProperties;
    switch (type) {
        case 'ADD_TOAST':
            switch (payload.toastType) {
                case "TOAST_SUCCESS":
                    toastProperties = {
                        id: state.toastList.length + 1,
                        title: payload.title,
                        toastIcon: 'fa-check-circle',
                        toastClass: 'success-toast'
                    }
                    break;
                case "TOAST_WARNING":
                    toastProperties = {
                        id: state.toastList.length + 1,
                        title: payload.title,
                        toastIcon: 'fa-exclamation-circle',
                        toastClass: 'warning-toast'
                    }
                    break;
                case "TOAST_ERROR":
                    toastProperties = {
                        id: state.toastList.length + 1,
                        title: payload.title,
                        toastIcon: 'fa-exclamation-triangle',
                        toastClass: 'danger-toast'
                    }
                    break;
                default:
                    toastProperties = {
                        id: 1, 
                        title: '', 
                        toastIcon: 'fa-exclamation-circle', 
                        toastClass: 'warning-toast'}
            }
            return { ...state, toastList: [...state.toastList, toastProperties] }
        case 'REMOVE_TOAST':
            const newToastList = state.toastList.filter(toast => toast.id !== payload.toastId)
            return { ...state, toastList: newToastList }
        default: 
            console.error('Unhandled action type');
            return state;
    }
}

export { initToastState, toastReducer }