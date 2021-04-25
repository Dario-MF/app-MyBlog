import { types } from '../types/types';



export const uiOpenLoginModal = () => ({ type: types.uiOpenModalLogin });
export const uiCloseLoginModal = () => ({ type: types.uiCloseModalLogin });
export const uiOpenRegisterModal = () => ({ type: types.uiOpenModalRegister });
export const uiCloseRegisterModal = () => ({ type: types.uiCloseModalRegister });