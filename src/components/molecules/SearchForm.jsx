import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { fetchNotToken } from '../../helpers/fetch';


const SearchForm = ({ setPostsSearch }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        searchPosts(data.search);
        console.log(data)
    };

    const searchPosts = (query) => {
        const endPoint = `posts?search=${query}&page=1`
        fetchNotToken(endPoint)
            .then(resp => resp.json())
            .then(resp => {
                let result = parseResult(resp.data)
                setPostsSearch({
                    posts: resp.data.posts,
                    result
                })
            })
            .catch(err => {
                Swal.fire(
                    'Oops...',
                    err.error.toLocaleString(),
                    'error'
                );
            });
    };


    const parseResult = (data) => {
        if (!data.posts.length) {
            return `No se encuentran resultados para "${data.query}"`;
        } else {
            return `Se encontraron ${data.total_posts} post que incluyan "${data.query}"`
        }
    };

    return (
        <div className="container_form_search container_form_edit">
            <form className="edit_user_form" onSubmit={handleSubmit(onSubmit)} >
                <div className="search_field edit_user_field">
                    <input
                        type="text"
                        placeholder="Search.."
                        {...register('search')}
                    />
                    <button className="btn_search" type="submit"><i class="bi bi-search"></i></button>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
