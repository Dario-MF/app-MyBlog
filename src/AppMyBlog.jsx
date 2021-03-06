import React from 'react';
import { Provider } from 'react-redux';

import './styles/main.scss';
import { store } from './store/store';
import AppRouter from './router/AppRouter';



const AppMyBlog = () => {

    return (
        <Provider store={store}>
            <AppRouter />
        </ Provider>
    );
};


export default AppMyBlog;