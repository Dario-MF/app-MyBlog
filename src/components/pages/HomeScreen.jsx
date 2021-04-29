import React from 'react';
import { useSelector } from 'react-redux';
import HeaderLogin from '../organism/HeaderLogin';
import HeaderLogout from '../organism/HeaderLogout';


const HomeScreen = () => {
    const { logged } = useSelector(state => state.auth);

    return (
        <div className='homeScreen'>
            {
                !logged ?<HeaderLogout /> :<HeaderLogin />
            } 
            <div className="home_body">
                <h2 className="body_title">
                    Post de la comunidad
                </h2>




            </div>
            

        </div>
    );
};

export default HomeScreen;
