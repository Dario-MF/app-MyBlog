import Swal from 'sweetalert2';
import { capitalize } from '../helpers/capitalize';
import { fetchFormData, fetchNotToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import { uiCloseLoginModal, uiCloseRegisterModal } from './ui';



export const startRegister = (user) => {
    return async (dispatch) => {

        const resp = await fetchNotToken('auth/signup', user, 'POST');
        const body = await resp.json();

        if (resp.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init', new Date().getTime());

            const { email, name, surname, uid, img } = body.user;
            dispatch(register({
                email,
                name,
                surname,
                uid,
                img
            }));
            Swal.fire(
                'Bienvenido!',
                `${capitalize(`${name} ${surname}`)}, ya formas parte de MyBlog!`,
                'success'
            );
            dispatch(uiCloseRegisterModal())
        } else {
            Swal.fire(
                'Oops...',
                body.error.toLocaleString(),
                'error'
            );
        }
    };
};

export const startLogin = (user) => {
    return async (dispatch) => {

        const resp = await fetchNotToken('auth/signin', user, 'POST');
        const body = await resp.json();

        if (resp.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init', new Date().getTime());

            const { email, name, surname, uid, img } = body.user;
            dispatch(login({
                email,
                name,
                surname,
                uid,
                img
            }));
            Swal.fire(
                'Bienvenido!',
                capitalize(`${name} ${surname}`),
                'success'
            );
            dispatch(uiCloseLoginModal());
        } else {
            Swal.fire(
                'Oops...',
                body.error.toLocaleString(),
                'error'
            );
        }
    };
};

export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchWithToken('auth/refresh');
        const body = await resp.json();

        if (resp.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init', new Date().getTime());

            dispatch(login(body.user));
        } else {
            dispatch({ type: types.authCheckingFinish });
        };
    };
};

export const userLogout = (history) => {
    return async (dispatch) => {
        Swal.fire({
            title: 'Confirme para desconectarse',
            showDenyButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                // Clean storage, state, redirect to home.
                localStorage.clear('token');
                localStorage.clear('token-init');

                dispatch({ type: types.authLogout });
                history.push("/");
            } else if (result.isDenied) {
                return
            };
        });
    };
};

export const updateUser = (data, history, userId) => {
    return async (dispatch) => {
        const resp = await fetchWithToken(`users/${userId}`, data, 'PUT');
        const body = await resp.json();

        if (resp.ok) {
            Swal.fire(
                `${body.msg}`,
                `${body.msgPassword}`,
                'success'
            );
            dispatch(register(body.data));
            history.push(`/users/${userId}`);
        } else {
            Swal.fire(
                'Oops...',
                body.error.toLocaleString(),
                'error'
            );
        };
    };
};


export const updateUserImg = (data, history, userId) => {
    return async (dispatch) => {
        const resp = await fetchFormData(`uploads/users/${userId}`, data, 'PUT');
        const body = await resp.json();

        if (resp.ok) {
            dispatch(register(body.data));
            history.push(`/users/${userId}`);
        } else {
            console.log(body.error)
        };
    };
};


export const deleteUser = (history, userId) => {
    return async (dispatch) => {
        Swal.fire({
            title: '¿Desea Eliminar el Usuario?',
            showDenyButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `No`

        }).then(async (result) => {

            if (result.isConfirmed) {
                const resp = await fetchWithToken(`users/${userId}`, {}, 'DELETE');
                const body = await resp.json();

                if (resp.ok) {
                    Swal.fire(
                        'Usuario Eliminado!',
                        body.msg,
                        'success'
                    );
                    // Clean storage, state, redirect to home.
                    localStorage.clear('token');
                    localStorage.clear('token-init');

                    dispatch({ type: types.authLogout });
                    history.push("/");
                } else {
                    Swal.fire(
                        'Oops...',
                        body.error.toLocaleString(),
                        'error'
                    );
                };
            } else if (result.isDenied) {
                return
            };
        });

    };
};



const register = (user) => ({
    type: types.authStartRegister,
    payload: user
});

const login = (user) => ({
    type: types.authLogin,
    payload: user
});


