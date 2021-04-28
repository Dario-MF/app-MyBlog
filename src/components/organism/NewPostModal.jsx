import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseNewPostModal } from '../../actions/ui';
import NewPostForm from '../molecules/NewPostForm';

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

const NewPostModal = () => {
    const { modalNewPostOpen } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const modalClose = () => {
        dispatch(uiCloseNewPostModal());
    };

    return (
        <div>
            <Modal
                isOpen={modalNewPostOpen}
                onRequestClose={modalClose}
                style={customStyles}
                overlayClassName='modal-fondo'
            >
                <div className="modal-newpost">
                    <div className="title-login">
                        <h3>Create New Blog Post</h3>
                        <hr/>
                    </div>
                    <NewPostForm modalClose={modalClose}/>
                </div>
            </Modal>
        </div>
    );
};



export default NewPostModal;