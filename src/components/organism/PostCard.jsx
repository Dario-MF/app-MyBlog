import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../../helpers/capitalize';
import { howLong } from '../../helpers/howLongMoment';


const PostCard = ({ post }) => {
    const { title, subtitle, img, _id, createdAt, author } = post;
    const textDate = howLong(createdAt);

    return (
        <div className="post_card">
            <div className="card_img_box">
                <img className="card_img" src={img} alt="post" />
            </div>
            <div className="card_header">
                <h3 className="card_title">{title}</h3>
                <h4 className="card_subtitle">{subtitle}</h4>
            </div>
            <div className="author_comp">
                <img src={author.img} className='author_img' alt="author" />
                <Link to={`/users/${author.uid}`} >
                    <p className="author_name">{capitalize(`${author.name} ${author.surname}`)}</p>
                </Link>
                <p className="date_post">{textDate}</p>
            </div>
            <p className="post_date"></p>
            <div className="card_call">
                <Link to={`/posts/${_id}`} >
                    <button className="card_call_btn btn_call">Leer Post</button>
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
