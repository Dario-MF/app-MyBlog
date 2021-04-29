//import { types } from '../types/types';
import Swal from 'sweetalert2';
import { fetchFormData } from '../helpers/fetch';
import { uiCloseNewPostModal } from './ui';


export const createNewPost = (data, history) => {
    return async (dispatch) => {
        const resp = await fetchFormData('posts', data, 'POST');
        const body = await resp.json();
        console.log(body)
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
                body.errors,
                'error'
            );
        };
    };
};