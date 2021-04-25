import React from 'react';
import Modal from 'react-modal';

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

    return (
        <div>
            <Modal
                isOpen={true}
                //onRequestClose={dispatch}
                style={customStyles}
                //className='modal'
                overlayClassName='modal-fondo'
            >
                <div className="modal">
                    <div class="title login">
                        <h3>Login</h3>
                    </div>
                    <div class="form-container">
                        <div class="form-inner">
                            <form class="login">
                                <div class="field">
                                    <input type="email" placeholder="Email Address" required />
                                </div>
                                <div class="field">
                                    <input type="password" placeholder="Password" required />
                                </div>
                                <div class="field btn">
                                    <div class="btn-layer"></div>
                                    <input type="submit" value="Login" />
                                </div>
                                <div class="signup-link">
                                    Not a member? <a href="/">Signup now</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default LoginModal;
