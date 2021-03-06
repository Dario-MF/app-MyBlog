import { types } from '../types/types';



export const uiOpenLoginModal = () => ({ type: types.uiOpenModalLogin });
export const uiCloseLoginModal = () => ({ type: types.uiCloseModalLogin });

export const uiOpenRegisterModal = () => ({ type: types.uiOpenModalRegister });
export const uiCloseRegisterModal = () => ({ type: types.uiCloseModalRegister });

export const uiOpenNewPostModal = () => ({ type: types.uiOpenModalNewPost });
export const uiCloseNewPostModal = () => ({ type: types.uiCloseModalNewPost });

export const uiOpenUpdatePostModal = () => ({ type: types.uiOpenModalUpdatePost });
export const uiCloseUpdatePostModal = () => ({ type: types.uiCloseModalUpdatePost });