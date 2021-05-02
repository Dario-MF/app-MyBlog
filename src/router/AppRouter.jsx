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
import NavActions from '../components/templates/NavActionsPosts';
import UserEditScreen from '../components/pages/UserEditScreen';
import PrivateRoute from './PrivateRoute';


const AppRouter = () => {
    const { checking, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if (checking) {
        //Comprobando user logged.
        return (<h1>Espere...</h1>)
    }

    return (
        <Router>
            <NavBarPpal />
            <div className='screen'>
                {
                    (!!user.uid) &&
                    <>
                        <Route exact path='/posts/:idPost' component={NavActions} />
                        <Route exact path='/users/:idUser' component={NavActions} />
                        <Route exact path='/edit-user' component={NavActions} />
                        <Route exact path='/search' component={NavActions} />
                        <Route exact path='/' component={NavActions} />
                    </>
                }
                <div className="screen_content">
                    <Switch>
                        <Route exact path='/' component={HomeScreen} />
                        <Route exact path='/posts/:idPost' component={PostScreen} />
                        <Route exact path='/search' component={SearchScreen} />
                        <Route exact path='/users/:idUser' component={UserScreen} />
                        <PrivateRoute exact path='/edit-user' isAuthenticated={!!user.uid} component={UserEditScreen} />

                        {/*  Note: 404 */}
                        <Redirect to='/' />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default AppRouter;