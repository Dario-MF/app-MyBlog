import { types } from "../types/types";

const initialState = {
    location: null
}

export const locationReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.locationChange:
            return {
                location: action.payload
            };
        default:
            return state;
    }
};