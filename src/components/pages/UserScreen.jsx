import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLocation } from '../../actions/location';

const UserScreen = () => {
    const dispatch = useDispatch();
    dispatch(changeLocation('user'));
    return (
        <div>
            <h1>UserScreen</h1>
        </div>
    );
};

export default UserScreen;
