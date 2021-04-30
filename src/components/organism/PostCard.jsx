import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    const { title, subtitle, img, _id } = post;

    return (
        <Link to={`/posts/${_id}`} className="post_card">
            <div>
                <div className="card_img_box">
                    <img className="card_img" src={img} alt="post" />
                </div>
                <div className="card_header">
                    <h3 className="card_title">{title}</h3>
                    <h4 className="card_subtitle">{subtitle}</h4>
                </div>
                <div className="card_call">
                    <button className="card_call_btn btn_call">Leer</button>
                </div>
            </div>
        </Link>
    );
};

export default PostCard;
