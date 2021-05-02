import React, { useEffect, useState } from 'react';
import { fetchNotToken } from '../../helpers/fetch';
import PostCard from './PostCard';

const PostsContainer = () => {
    const endPoint = 'posts?page=1'
    const [posts, setPosts] = useState({
        error: null,
        loading: true,
        data: null
    });

    useEffect(() => {
        fetchNotToken(endPoint)
            .then(resp => resp.json())
            .then(resp => {
                setPosts({
                    error: null,
                    loading: false,
                    data: resp.data.posts
                })
            })
            .catch(error => {
                setPosts({
                    data: null,
                    loading: false,
                    error
                })
            })
    }, [endPoint])

    return (
        <div className="posts_container">
            <div className="posts_cards">
                <h2 className="posts_title result_text">
                    Posts de la comunidad
                </h2>
                {
                    posts.data && posts.data.map(post => (
                        <PostCard
                            key={post._id}
                            post={post}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default PostsContainer;
