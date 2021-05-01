import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { userLogout } from '../../actions/auth';
import { uiOpenNewPostModal } from '../../actions/ui';
import BtnOptions from '../atoms/BtnOptions';
import NavOwnerPost from '../molecules/NavOwnerPost';


const NavBarOptions = ({ location }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { authorId } = useSelector(state => state.post);



    const clickNewPost = () => {
        dispatch(uiOpenNewPostModal());
    };
    const clickLogout = () => {
        dispatch(userLogout(history));
    };

    const activeNavPosition = () => {
        switch (location) {
            case 'posts':
                if (authorId === user.uid) {
                    return <NavOwnerPost />
                }
                return;
            default:
                return;
        };
    };

    return (
        <div className='options_bar'>
            <div className="extends_bar">
                <ul className="options_list options_list_nav">
                    <li className="options_item">
                        <NavLink exact to={`/`} >
                            <BtnOptions btnType="bi bi-house" textBtn='Home' />
                        </NavLink>
                    </li>
                    <li className="options_item">
                        <NavLink exact to={`/user/${user.name}_${user.surname}`} >
                            <BtnOptions btnType="bi bi-person" textBtn='Perfil' />
                        </NavLink>
                    </li>
                    <li className="options_item">
                        <NavLink exact to={'/search'} >
                            <BtnOptions btnType="bi bi-search" textBtn='Buscar' />
                        </NavLink>
                    </li>
                </ul>
                <ul className="options_list options_list_actions">
                    <li className="options_item">
                        <BtnOptions btnType="bi bi-pencil-square" textBtn='New Post' handleClick={clickNewPost} />
                    </li>
                    {
                        activeNavPosition()
                    }
                </ul>
                <ul className="options_list options_list_actions">
                    <li className="options_item">
                        <BtnOptions btnType="bi bi-box-arrow-left" textBtn='Logout' handleClick={clickLogout} />
                    </li>
                </ul>

            </div>

        </div>
    );
};

export default NavBarOptions;
