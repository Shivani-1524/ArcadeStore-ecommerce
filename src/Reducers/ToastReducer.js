const initToastState = {
    toastList: []
}
const toastReducer = (state, { type, payload }) => {
    let toastProperties;
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
                case "TOAST_ERROR":
                    toastProperties = {
                        id: state.toastList.length + 1,
                        title: payload.title,
                        toastIcon: 'fa-exclamation-triangle',
                        toastClass: 'danger-toast'
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
            }
            return { ...state, toastList: [...state.toastList, toastProperties] }
        case 'REMOVE_TOAST':
            const newToastList = state.toastList.filter(toast => toast.id !== payload.toastId)
            return { ...state, toastList: newToastList }
    }
}

export { initToastState, toastReducer }