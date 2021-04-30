import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';

import NavBarPpal from '../components/templates/NavBarPpal';
import HomeScreen from '../components/pages/HomeScreen';
import PostScreen from '../components/pages/PostScreen';
import UserScreen from '../components/pages/UserScreen';
import SearchScreen from '../components/pages/SearchScreen';
import NavBarOptions from '../components/templates/NavBarOptions';


const AppRouter = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    const { logged } = useSelector(state => state.auth);

    return (
        <Router>
            <NavBarPpal />
            <div className='screen'>
                {
                    (logged) && <NavBarOptions />
                }
                <div className="scren_content">
                    <Switch>
                        <Route exact path='/' component={HomeScreen} />
                        <Route exact path='/posts/:idPost' component={PostScreen} />
                        <Route exact path='/search' component={SearchScreen} />
                        <Route exact path='/user/:idUser' component={UserScreen} />
                        {/*  Note: 404 */}
                        <Redirect to='/' />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default AppRouter;