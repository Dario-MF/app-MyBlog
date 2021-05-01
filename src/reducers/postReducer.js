import { types } from "../types/types";

const initialState = {
    postId: null,
    authorId: null
}

export const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.postTarget:
            return {
                postId: action.payload.postId,
                authorId: action.payload.authorId
            };
        case types.postDestarget:
            return {
                ...initialState
            };
        default:
            return state;
    }
};