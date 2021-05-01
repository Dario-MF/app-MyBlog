import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLocation } from '../../actions/location';
import HeaderLogin from '../organism/HeaderLogin';
import HeaderLogout from '../organism/HeaderLogout';
import PostsContainer from '../organism/PostsContainer';


const HomeScreen = () => {
    const dispatch = useDispatch();
    dispatch(changeLocation('home'));

    const { logged } = useSelector(state => state.auth);

    return (
        <div className='homeScreen'>
            {
                !logged ? <HeaderLogout /> : <HeaderLogin />
            }
            <div className="home_body">
                <PostsContainer />

            </div>
        </div>
    );
};

export default HomeScreen;
