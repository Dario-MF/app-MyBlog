import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { capitalize } from '../../helpers/capitalize';
import { fetchNotToken } from '../../helpers/fetch';
import { howLong } from '../../helpers/howLongMoment';
import OwnerPostActions from '../molecules/OwnerPostActions';




const PostScreen = ({ match }) => {
    const endPoint = `posts/${match.params.idPost}`;
    const { user } = useSelector(state => state.auth);

    const [post, setPost] = useState({
        error: null,
        loading: true,
        data: null,
        datePost: null
    });


    useEffect(() => {
        fetchNotToken(endPoint)
            .then(resp => resp.json())
            .then(resp => {
                setPost({
                    error: null,
                    loading: false,
                    data: resp.data,
                    datePost: howLong(resp.data.createdAt)
                });

            })
            .catch(error => {
                setPost(p => ({
                    ...p,
                    loading: false,
                    error
                }))
            })

    }, [endPoint]);

    const ownerOptionsActive = () => {
        if (post.data.author.uid === user.uid) {
            return <OwnerPostActions post={post} />
        };
        return;
    };

    return (
        <div className="post_screen">
            {
                post.data &&
                <div className="post_container">
                    <div className="post_header_img">
                        <img src={post.data.img} className="screen_img" alt="post" />
                    </div>
                    <div className="post_header">
                        <div className="author_post_screen">
                            <img src={post.data.author.img} className='author_img' alt="author" />
                            <Link to={`/users/${post.data.author.uid}`} >
                                <p className="author_name">{capitalize(`${post.data.author.name} ${post.data.author.surname}`)}</p>
                            </Link>
                            <p className="date_post">{post.datePost}</p>
                            {
                                ownerOptionsActive()
                            }
                        </div>
                        <div className="titles_box">
                            <h1 className="post_title">{post.data.title}</h1>
                            <h3 className="post_subtitle">{post.data.subtitle}</h3>
                        </div>
                    </div>
                    <div className="post_article">
                        <div dangerouslySetInnerHTML={{ __html: post.data.article }} />
                    </div>
                </div>
            }
        </div>
    );
};

export default PostScreen;
