import { types } from '../types/types';


export const changeLocation = (location) => ({
    type: types.locationChange,
    payload: location
});