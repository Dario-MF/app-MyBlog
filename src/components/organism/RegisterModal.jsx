import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseRegisterModal, uiOpenLoginModal } from '../../actions/ui';
import SignupForm from '../molecules/SignupForm';

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

const RegisterModal = () => {
    const { modalRegisterOpen } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const modalClose = () => {
        dispatch(uiCloseRegisterModal());
    };

    const changeModal = () => {
        dispatch(uiCloseRegisterModal());
        dispatch(uiOpenLoginModal());
    };

    return (
        <div>
            <Modal
                isOpen={modalRegisterOpen}
                onRequestClose={modalClose}
                style={customStyles}
                overlayClassName='modal-fondo'
            >
                <div className="modal">
                    <div className="title-login">
                        <h3>Signup</h3>
                        <hr/>
                        <p className='text_login'>Create your account it´s free.</p>
                    </div>
                    <SignupForm changeModal={changeModal}/>
                </div>
            </Modal>
        </div>
    );
};



export default RegisterModal;
