import Swal from 'sweetalert2';
import { fetchNotToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import { uiCloseLoginModal, uiCloseRegisterModal } from './ui';



export const startRegister = (user) => {
    return async( dispatch ) => {
        
        const resp = await fetchNotToken('auth/signup', user, 'POST');
        const body = await resp.json();
        
        if(resp.ok){
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init', new Date().getTime() );
            
            const {email, name, surname, uid, img_avatar} = body.user;
            dispatch( register({
                email,
                name,
                surname,
                uid,
                img_avatar
            }));
            Swal.fire(
                'Bienvenido!',
                `${name}, ya formas parte de MyBlog!`,
                'success'
            );
            dispatch( uiCloseRegisterModal() )
        } else {
            Swal.fire(
                'Oops...', 
                body.errors[0], 
                'error'
            );
        }
    };
};

export const startLogin = (user) => {
    return async( dispatch ) => {
        
        const resp = await fetchNotToken('auth/signin', user, 'POST');
        const body = await resp.json();
        
        if(resp.ok){
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init', new Date().getTime() );
            
            const {email, name, surname, uid, img_avatar} = body.user;
            dispatch( login({
                email,
                name,
                surname,
                uid,
                img_avatar
            }));
            Swal.fire(
                'Bienvenido!',
                `${name} ${surname}`,
                'success'
            );
            dispatch( uiCloseLoginModal() );
        } else {
            Swal.fire(
                'Oops...', 
                body.msg, 
                'error'
            );
        }
    };
};

export const startChecking = () => {
    return async( dispatch ) => {
        const resp = await fetchWithToken('auth/refresh');
        const body = await resp.json();
        
        if(resp.ok){
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init', new Date().getTime() );
            
            const {email, name, surname, uid, img_avatar} = body.user;
            dispatch( login({
                email,
                name,
                surname,
                uid,
                img_avatar
            }));
        } else {
            dispatch({ type: types.authCheckingFinish });
        };
    };
};

export const userLogout = (history) => {  
    return async(dispatch) => {
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



const register = ( user ) => ({
    type: types.authStartRegister,
    payload: user
});

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});


