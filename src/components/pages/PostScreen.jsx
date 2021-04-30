import React, { useEffect, useState } from 'react';
import { capitalize } from '../../helpers/capitalize';
import { fetchNotToken } from '../../helpers/fetch';



const PostScreen = ({match}) => {

    const endPoint = `posts/${match.params.idPost}`

    const [post, setPost] = useState({
        error: null,
        loading: true,
        data: null
    });

    useEffect(() => {
        fetchNotToken(endPoint)
            .then(resp => resp.json())
            .then(resp => {
                setPost({
                    error: null,
                    loading: false,
                    data: resp.data
                })
            })
            .catch(error => {
                setPost({
                    data: null,
                    loading: false,
                    error
                })
            })
    }, [endPoint])
    console.log(post)
    
    return (
        <div className="post_screen">
            {  
                post.data && <div className="post_header">
                    <img src={post.data.img} alt="post" />
                    <h1>{post.data.title}</h1>
                    <h3 className="post_subtitle">{post.data.subtitle}</h3>
                    <div className="author_comp">
                        <img src={post.data.author.img} className='author_img' alt="author"/>
                        <p className="author_name">{capitalize(`${post.data.author.name} ${post.data.author.surname}`)}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default PostScreen;
