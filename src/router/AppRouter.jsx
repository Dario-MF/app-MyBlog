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
                    (logged) &&
                    <>
                        <Route path='/posts/:idPost' component={NavActions} />
                        <Route path='/users/:idUser' component={NavActions} />
                        <Route path='/search' component={NavActions} />
                        <Route exact path='/' component={NavActions} />
                    </>
                }
                <div className="screen_content">
                    <Switch>
                        <Route exact path='/' component={HomeScreen} />
                        <Route exact path='/posts/:idPost' component={PostScreen} />
                        <Route exact path='/search' component={SearchScreen} />
                        <Route exact path='/users/:idUser' component={UserScreen} />
                        {/*  Note: 404 */}
                        <Redirect to='/' />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default AppRouter;