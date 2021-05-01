import React from 'react';
import BtnOptions from '../atoms/BtnOptions';


const NavOwnerPost = () => {
    const clickNewPost = () => {

    }

    return (
        <>
            <li className="options_item">
                <BtnOptions btnType="bi bi-pencil-square" textBtn='New Post' handleClick={clickNewPost} />
            </li>
            <li className="options_item">
                <BtnOptions btnType="bi bi-pencil-square" textBtn='New Post' handleClick={clickNewPost} />
            </li>
        </>
    );
};

export default NavOwnerPost;
