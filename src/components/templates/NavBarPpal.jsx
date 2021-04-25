import React from 'react';
import { Link } from 'react-router-dom';
import BtnModal from '../atoms/BtnModal';
import LoginModal from '../organism/LoginModal';

const NavBarPpal = () => {
    const handleClick = () => {
        console.log('click')
    }
    return (
        <div className='navbar_ppal'>
            <Link to='/' >
                <p className='brand'>Logo</p>
            </Link>
            <div className="navbar_auth">
                <ul className="navbar_list">
                    <li className="navbar_item">
                        <BtnModal text='Login' handleClick={handleClick} />
                        <LoginModal />
                    </li>
                    <li className="navbar_item">
                        <BtnModal text='Signup' handleClick={handleClick} />
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
