import { types } from "../types/types";

const initialState = {
    modalRegisterOpen: false,
    modalLoginOpen: false,
    modalNewPostOpen: false,
    modalUpdatePostOpen: false
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.uiOpenModalRegister:
            return {
                ...state,
                modalRegisterOpen: true
            };
        case types.uiCloseModalRegister:
            return {
                ...state,
                modalRegisterOpen: false
            };
        case types.uiOpenModalLogin:
            return {
                ...state,
                modalLoginOpen: true
            };
        case types.uiCloseModalLogin:
            return {
                ...state,
                modalLoginOpen: false
            };
        case types.uiOpenModalNewPost:
            return {
                ...state,
                modalNewPostOpen: true
            };
        case types.uiCloseModalNewPost:
            return {
                ...state,
                modalNewPostOpen: false
            };
        case types.uiOpenModalUpdatePost:
            return {
                ...state,
                modalUpdatePostOpen: true
            };
        case types.uiCloseModalUpdatePost:
            return {
                ...state,
                modalUpdatePostOpen: false
            };
        default:
            return state;
    }
};