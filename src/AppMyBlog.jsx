import React from 'react';


import './styles/main.scss';
import AppRouter from './router/AppRouter';



// midlewares: Axios, localeStorage, Redux



const AppMyBlog = () => {

    return (
        <>
            <AppRouter />
        </>
    );
};


export default AppMyBlog;