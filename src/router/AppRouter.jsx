import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import NavBarPpal from '../components/templates/NavBarPpal';
import HomeScreen from '../components/pages/HomeScreen';
import PostScreen from '../components/pages/PostScreen';
import UserScreen from '../components/pages/UserScreen';
import SearchScreen from '../components/pages/SearchScreen';
import { startChecking } from '../actions/auth';

const AppRouter = () => {

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch( startChecking() );
    }, [dispatch]);

    return (
        <Router>
            <NavBarPpal />
            <div className='screen'>
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route exact path='/posts' component={PostScreen} />
                    <Route exact path='/search&:query' component={SearchScreen} />
                    <Route exact path='/user/:idUser' component={UserScreen} />
                    {/*  Note: 404 */}
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;