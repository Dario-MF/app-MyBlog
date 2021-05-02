import React, { useState } from 'react';
import SearchForm from '../molecules/SearchForm';
import PostCard from '../organism/PostCard';

const SearchScreen = () => {
    const [postsSearch, setPostsSearch] = useState({
        posts: [],
        result: 'Busque sus posts favoritos...'
    });



    return (
        <div className="search_screen">
            <div className="search_header home_header">
                <div className="box_header">
                    <h1 className="header_title ">
                        Busca tus posts favoritos por titulo
                    </h1>
                </div>
            </div>
            <SearchForm setPostsSearch={setPostsSearch} />
            <div className="container_posts_search posts_cards">
                <h3 className='result_text'>{postsSearch.result}</h3>
                {
                    postsSearch.posts.map(post => (
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

export default SearchScreen;
