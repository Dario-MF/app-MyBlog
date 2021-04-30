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
            <h2 className="body_title">
                Posts de la comunidad
            </h2>
            <div className="posts_cards">
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
