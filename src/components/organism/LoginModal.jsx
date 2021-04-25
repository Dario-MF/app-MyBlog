import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseLoginModal } from '../../actions/ui';
import LoginForm from '../molecules/LoginForm';

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


Modal.setAppElement('#root')

const LoginModal = () => {
    const { modalLoginOpen } = useSelector(state => state.ui);

    const dispatch = useDispatch();
    const modalClose = () => {
        dispatch(uiCloseLoginModal())
    }

    return (
        <div>
            <Modal
                isOpen={modalLoginOpen}
                onRequestClose={modalClose}
                style={customStyles}
                overlayClassName='modal-fondo'
            >
                <div className="modal">
                    <div class="title login">
                        <h3>Login</h3>
                    </div>
                    <LoginForm />
                </div>
            </Modal>
        </div>
    );
};



export default LoginModal;
