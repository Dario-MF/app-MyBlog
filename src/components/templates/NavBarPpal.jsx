import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { userLogout } from '../../actions/auth';
import { uiOpenLoginModal, uiOpenNewPostModal, uiOpenRegisterModal } from '../../actions/ui';
import BtnModal from '../atoms/BtnModal';
import LoginModal from '../organism/LoginModal';
import NewPostModal from '../organism/NewPostModal';
import RegisterModal from '../organism/RegisterModal';

const NavBarPpal = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { logged, user } = useSelector(state => state.auth);

    const openLoginModal = () => {
        dispatch(uiOpenLoginModal());
    };
    const openRegisterModal = () => {
        dispatch(uiOpenRegisterModal());
    };
    const openNewPostModal = () => {
        dispatch(uiOpenNewPostModal());
    };
    const handleClick = () => {
        dispatch(userLogout(history));
    };

    return (
        <div className='navbar_ppal'>
            <Link to='/' >
                <p className='brand'>Logo</p>
            </Link>
            {
                (!logged) &&
                <div className="navbar_auth">
                    <ul className="navbar_list">
                        <li className="navbar_item">
                            <BtnModal text='Login' handleClick={openLoginModal} />
                        </li>
                        <li className="navbar_item">
                            <BtnModal text='Signup' handleClick={openRegisterModal} />
                        </li>
                    </ul>
                </div>
            }
            {
                (logged) &&
                <div className="navbar_auth">
                    <ul className="navbar_list">
                        <li className="navbar_item">
                            <BtnModal text='New Post' handleClick={openNewPostModal} />
                        </li>
                        <li className="navbar_item">
                            <BtnModal text='Logout' handleClick={handleClick} />
                        </li>
                    </ul>
                    <div className="navbar_user_img">
                        <Link to={`/users/${user.uid}`} >
                            <img src={user.img} className='user_img' alt={user.name} />
                        </Link>
                    </div>
                </div>
            }
            <div className="modals" hidden>
                <RegisterModal />
                <LoginModal />
                <NewPostModal />
            </div>
        </div>
    );
};

export default NavBarPpal;
