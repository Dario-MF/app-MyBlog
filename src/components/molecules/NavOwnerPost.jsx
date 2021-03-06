import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { deletePost } from '../../actions/posts';
import { uiOpenUpdatePostModal } from '../../actions/ui';
import BtnOptions from '../atoms/BtnOptions';


const NavOwnerPost = ({ postId }) => {
    const dispatch = useDispatch();
    const history = useHistory()

    const clickUpdatePost = () => {
        dispatch(uiOpenUpdatePostModal());
    };

    const clickDeletePost = () => {
        dispatch(deletePost(history, postId));
    };

    return (
        <>
            <li className="options_item">
                <BtnOptions btnType="bi bi-pencil" textBtn='Edit Post' handleClick={clickUpdatePost} />
            </li>
            <li className="options_item">
                <BtnOptions btnType="bi bi-trash" textBtn='Delete Post' handleClick={clickDeletePost} />
            </li>
        </>
    );
};

export default NavOwnerPost;
