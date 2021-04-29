import React from 'react';
import BtnOptions from '../atoms/BtnOptions';

const NavBarOptions = () => {
    return (
        <div className='options_bar'>
            <ul className="options_list options_list_user">
                <li className="options_item">
                    <BtnOptions  btnType="bi bi-person" textBtn='Perfil' />
                </li>
                <li className="options_item">
                    <BtnOptions  btnType="bi bi-box-arrow-left" textBtn='Exit' />
                </li>
            </ul>
            <ul className="options_list options_list_post">
                <li className="options_item">
                    <BtnOptions  btnType="bi bi-pencil-square" textBtn='New Post' />
                </li>
                <li className="options_item">
                    <BtnOptions  btnType="bi bi-search" textBtn='Buscar' />
                </li>
            </ul>

        </div>
    );
};

export default NavBarOptions;
