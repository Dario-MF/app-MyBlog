import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLocation } from '../../actions/location';

const SearchScreen = () => {
    const dispatch = useDispatch();
    dispatch(changeLocation('search'));
    return (
        <div>
            <h1>SearchScreen</h1>
        </div>
    );
};

export default SearchScreen;
