import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { uiOpenLoginModal, uiOpenRegisterModal } from '../../actions/ui';
import BtnModal from '../atoms/BtnModal';
import LoginModal from '../organism/LoginModal';
import RegisterModal from '../organism/RegisterModal';

const NavBarPpal = () => {
    const dispatch = useDispatch();

    const openLoginModal = () => {
        dispatch(uiOpenLoginModal());
    };

    const openRegisterModal = () => {
        dispatch(uiOpenRegisterModal());
    };

    const handleClick = () => {
        console.log('click')
    };

    return (
        <div className='navbar_ppal'>
            <Link to='/' >
                <p className='brand'>Logo</p>
            </Link>
            <div className="navbar_auth">
                <ul className="navbar_list">
                    <li className="navbar_item">
                        <BtnModal text='Login' handleClick={openLoginModal} />
                        <LoginModal />
                    </li>
                    <li className="navbar_item">
                        <BtnModal text='Signup' handleClick={openRegisterModal} />
                        <RegisterModal />
                    </li>
                    <li className="navbar_item">
                        <BtnModal text='Logout' handleClick={handleClick} />
                    </li>
                </ul>
                <div className="navbar_user_img">
                    <img src="#" className='user_img' alt="" />
                </div>
            </div>
        </div>
    );
};

export default NavBarPpal;
