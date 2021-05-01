//import { types } from '../types/types';
import Swal from 'sweetalert2';
import { fetchFormData, fetchWithToken } from '../helpers/fetch';
import { uiCloseNewPostModal, uiCloseUpdatePostModal } from './ui';


export const createNewPost = (data, history) => {
    return async (dispatch) => {
        const resp = await fetchFormData('posts', data, 'POST');
        const body = await resp.json();

        if (resp.ok) {
            Swal.fire(
                'Post creado!',
                `Ya puede acceder al post`,
                'success'
            );
            dispatch(uiCloseNewPostModal());
            history.push(`/posts/${body.data._id}`);
        } else {
            Swal.fire(
                'Oops...',
                body.error.toLocaleString(),
                'error'
            );
        };
    };
};

export const updatePost = (data, history, postId) => {
    return async (dispatch) => {
        const resp = await fetchFormData(`posts/${postId}`, data, 'PUT');
        const body = await resp.json();

        if (resp.ok) {
            Swal.fire(
                '!Post actualizado!',
                `Ya puede acceder al post 
                Recargue la pagina`,
                'success'
            );
            dispatch(uiCloseUpdatePostModal());
            history.push(`/posts/${body.data._id}`);
        } else {
            Swal.fire(
                'Oops...',
                body.error.toLocaleString(),
                'error'
            );
        };
    };
};

export const deletePost = (history, postId) => {
    return async () => {
        Swal.fire({
            title: 'Confirme para Eliminar Post',
            showDenyButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `No`
        }).then(async (result) => {
            if (result.isConfirmed) {
                const resp = await fetchWithToken(`posts/${postId}`, {}, 'DELETE');
                const body = await resp.json();
                console.log(body)
                if (resp.ok) {
                    Swal.fire(
                        'Post eliminado',
                        `El post fue eliminado stisfactoriamente`,
                        'success'
                    );
                    history.push(`/`);
                } else {
                    Swal.fire(
                        'Oops...',
                        body.error.toLocaleString(),
                        'error'
                    );
                };
                history.push("/");
            } else if (result.isDenied) {
                return
            };
        });

    };
};

