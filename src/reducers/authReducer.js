import { types } from "../types/types";

const initialState = {
    user: {
        uid: null,
        name: null,
        surname: null,
        email: null,
        img_avatar: null
    },
    logged: false
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.authStartRegister:
            return {
                ...state,
                user: action.payload,
                logged: true
            };
        case types.authLogin:
            return {
                ...state,
                user: action.payload,
                logged: true
            };
        case types.authCheckingFinish:
            return {
                ...initialState
            };
        case types.authLogout:
            return {
                ...initialState
            };
        default:
            return state;
    }
};