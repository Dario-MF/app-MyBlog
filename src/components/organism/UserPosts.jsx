import React from 'react';
import PostCard from './PostCard';

const UserPosts = ({ posts }) => {
    return (
        <div className="posts_container user_posts">
            <h2 className="body_title">
                Ultimos posts
            </h2>
            <div className="posts_cards">
                {
                    posts.map(post => (
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

export default UserPosts;
