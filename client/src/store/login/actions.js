export const SET_LOGINED = 'SET_LOGINED';
export const UNSET_LOGINED = 'UNSET_LOGINED';

export const login = () => {
    return {
        type: SET_LOGINED
    }
}

export const logout = () => {
    return {
        type: UNSET_LOGINED
    }
}