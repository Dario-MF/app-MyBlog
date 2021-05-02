import { types } from "../types/types";

const initialState = {
    user: {
        uid: null,
        name: null,
        surname: null,
        email: null,
        img_avatar: null,
        facebookUrl: null,
        twitterUrl: null,
        githubUrl: null,
        linkedinUrl: null
    },
    logged: false,
    checking: true
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.authStartRegister:
            return {
                user: action.payload,
                logged: true,
                checking: false
            };
        case types.authLogin:
            return {
                user: action.payload,
                logged: true,
                checking: false
            };
        case types.authCheckingFinish:
            return {
                ...initialState,
                checking: false
            };
        case types.authLogout:
            return {
                ...initialState,
                checking: false
            };
        default:
            return state;
    }
};