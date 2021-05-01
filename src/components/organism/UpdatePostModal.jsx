import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseUpdatePostModal } from '../../actions/ui';
import UpdatePostForm from '../molecules/UpdatePostForm';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


Modal.setAppElement('#root');

const UpdatePostModal = ({ post }) => {
    const { modalUpdatePostOpen } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const modalClose = () => {
        dispatch(uiCloseUpdatePostModal());
    };

    return (
        <div>
            <Modal
                isOpen={modalUpdatePostOpen}
                onRequestClose={modalClose}
                style={customStyles}
                overlayClassName='modal-fondo'
            >
                <div className="modal-newpost">
                    <div className="title-login">
                        <h3>Update Blog Post</h3>
                        <hr />
                    </div>
                    <UpdatePostForm modalClose={modalClose} post={post} />
                </div>
            </Modal>
        </div>
    );
};



export default UpdatePostModal;