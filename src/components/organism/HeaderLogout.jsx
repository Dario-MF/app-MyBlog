import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenLoginModal, uiOpenRegisterModal } from '../../actions/ui';



const HeaderLogout = () => {
    const dispatch = useDispatch();
    
    const loginClick = () => {
        dispatch(uiOpenLoginModal());
    };
    const signupClick = () => {
        dispatch(uiOpenRegisterModal());
    };

    return (
        <div className="home_header">
            <div className="box_header">
                <h1 className="header_title">
                    Bienvenido a MyBlog! <br/>
                    Registrate y crea con la comunidad <br/>
                    Aprende compartiendo...
                </h1>
                <button 
                    className='btn_call'
                    onClick={loginClick}
                >Login
                </button>
                <button 
                    className='btn_call'
                    onClick={signupClick}
                >Signup
                </button>
            </div>  
        </div>  
    );
};

export default HeaderLogout;
