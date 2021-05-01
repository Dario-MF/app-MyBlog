import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { userLogout } from '../../actions/auth';
import { uiOpenNewPostModal } from '../../actions/ui';
import { fetchNotToken } from '../../helpers/fetch';
import BtnOptions from '../atoms/BtnOptions';
import NavOwnerPost from '../molecules/NavOwnerPost';


const NavActions = ({ match }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const [dataLocation, setDataLocation] = useState({
        data: null,
    });

    const location = history.location.pathname.split('/')[1];

    const createEndPoint = () => {
        if (location === 'posts') {
            return `${location}/${match.params.idPost}`;
        } else if (location === 'users') {
            return `${location}/${match.params.idUser}`;
        }
        return;
    };
    const endPoint = createEndPoint();

    useEffect(() => {
        if (location === 'posts' || location === 'users') {
            fetchNotToken(endPoint)
                .then(resp => resp.json())
                .then(resp => {
                    setDataLocation({
                        data: resp.data
                    });
                })
                .catch(error => {
                    console.log(error)
                })
        };
    }, [location, endPoint]);

    const clickNewPost = () => {
        dispatch(uiOpenNewPostModal());
    };
    const clickLogout = () => {
        dispatch(userLogout(history));
    };

    const activeNavPosition = () => {
        switch (location) {
            case 'posts':
                if (user.uid === dataLocation.data.author.uid) {
                    return <NavOwnerPost postId={match.params.idPost} />
                }
                return;
            case 'users':
                if (user.uid === match.params.idUser) {
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
                        <NavLink exact to={`/users/${user.uid}`} >
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
                        (dataLocation.data) && activeNavPosition()
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

export default NavActions;
