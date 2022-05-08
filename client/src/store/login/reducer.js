import { SET_LOGINED, UNSET_LOGINED } from './actions';
const inintialChatState = {
    loginStatus: false,
}


const loginReducer = (state = inintialChatState, action) => {
    switch (action.type) {
        case SET_LOGINED: {
            return {
                ...state,
                loginStatus: true
            }
        }
        case UNSET_LOGINED: {
            return {
                ...state,
                loginStatus: false
            }
        }
        default: {
            return state
        }
    }
}
export default loginReducer;  