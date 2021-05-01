import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { userLogout } from '../../actions/auth';
import { uiOpenNewPostModal } from '../../actions/ui';
import BtnOptions from '../atoms/BtnOptions';


const NavBarOptions = (params) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const clickNewPost = () => {
        dispatch(uiOpenNewPostModal());
    };
    const clickLogout = () => {
        dispatch(userLogout(history));
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
