import React from 'react';
import PostCard from './PostCard';

const UserPosts = ({ posts }) => {
    return (
        <div className="posts_container user_posts">
            <div className="posts_cards">
                <h2 className=" result_text">
                    Ultimos posts
                </h2>
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
