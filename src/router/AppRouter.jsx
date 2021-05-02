import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { startChecking } from '../actions/auth';

import NavBarPpal from '../components/templates/NavBarPpal';
import HomeScreen from '../components/pages/HomeScreen';
import PostScreen from '../components/pages/PostScreen';
import UserScreen from '../components/pages/UserScreen';
import SearchScreen from '../components/pages/SearchScreen';
import NavActions from '../components/templates/NavActionsPosts';
import UserEditScreen from '../components/pages/UserEditScreen';
import PrivateRoute from './PrivateRoute';


const AppRouter = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    return (
        <Router>
            <NavBarPpal />
            <div className='screen'>

                <PrivateRoute exact path='/posts/:idPost' component={NavActions} />
                <PrivateRoute exact path='/users/:idUser' component={NavActions} />
                <PrivateRoute exact path='/edit-user' component={NavActions} />
                <PrivateRoute exact path='/search' component={NavActions} />
                <PrivateRoute exact path='/' component={NavActions} />

                <div className="screen_content">
                    <Switch>
                        <Route exact path='/' component={HomeScreen} />
                        <Route exact path='/posts/:idPost' component={PostScreen} />
                        <Route exact path='/search' component={SearchScreen} />
                        <Route exact path='/users/:idUser' component={UserScreen} />
                        <PrivateRoute exact path='/edit-user' component={UserEditScreen} />

                        {/*  Note: 404 */}
                        <Redirect to='/' />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default AppRouter;