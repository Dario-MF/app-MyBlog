import React from 'react';
import { Link } from 'react-router-dom';

const NavBarPpal = () => {
    return (
        <div className='navbar_ppal'>
            <Link to='/' >
                <p className='brand'>Logo</p>
            </Link>
            <div className="navbar_auth">
                <ul className="navbar_list">
                    <li className="navbar_item">
                        <button className='btn_modal' onClick={() => console.log('click login')}>Login</button>
                    </li>
                    <li className="navbar_item">
                        <button className='btn_modal'>Register</button>
                    </li>
                    <li className="navbar_item">
                        <button className='btn_modal'>Logout</button>
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
