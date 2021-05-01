import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { deletePost } from '../../actions/posts';
import { uiOpenUpdatePostModal } from '../../actions/ui';
import UpdatePostModal from '../organism/UpdatePostModal';

const OwnerPostActions = ({ post }) => {
    const dispatch = useDispatch();
    const history = useHistory()

    const clickUpdatePost = () => {
        dispatch(uiOpenUpdatePostModal());
    };

    const clickDeletePost = () => {
        dispatch(deletePost(history, post.data._id));
    };

    return (
        <div className="owner_actions">
            <button
                className="btn_update_post"
                onClick={clickUpdatePost}
            ><i className="bi bi-pencil-fill"></i></button>
            <UpdatePostModal post={post} />
            <button
                className="btn_delete_post"
                onClick={clickDeletePost}
            ><i className="bi bi-trash-fill"></i></button>
        </div>
    );
};

export default OwnerPostActions;
