import React from 'react';

const HomeScreen = () => {


    const loginClick = () => {
        
    }
    const signupClick = () => {

    }


    return (
        <div className='homeScreen'>
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
            <div className="home_body">
                <h2 className="body_title">
                    Post de la comunidad
                </h2>




            </div>
            

        </div>
    );
};

export default HomeScreen;
