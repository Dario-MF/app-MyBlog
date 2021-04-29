import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenNewPostModal } from '../../actions/ui';
import { capitalize } from '../../helpers/capitalize';


const HeaderLogin = () => {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const postClick = () => {
        dispatch(uiOpenNewPostModal());
    };

    return (
        <div className="home_header">
            <div className="box_header">
                <h1 className="header_title">
                    {capitalize(`Bienvenido ${ user.name} ${user.surname}`)}! <br/>
                    Postea y comparte con la comunidad<br/>
                    Aprende compartiendo...
                </h1>
                <button 
                    className='btn_call'
                    onClick={postClick}
                >New Post
                </button>
            </div>  
        </div>  
    );
};

export default HeaderLogin;
