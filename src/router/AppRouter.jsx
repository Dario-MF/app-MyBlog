import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavBarPpal from '../components/templates/NavBarPpal';
import HomeScreen from '../components/pages/HomeScreen';
import PostScreen from '../components/pages/PostScreen';
import UserScreen from '../components/pages/UserScreen';
import SearchScreen from '../components/pages/SearchScreen';

const AppRouter = () => {
    return (
        <Router>
            <NavBarPpal />
            <div className='screen'>
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route exact path='/posts' component={PostScreen} />
                    <Route exact path='/search&:query' component={SearchScreen} />
                    <Route exact path='/user/:idUser' component={UserScreen} />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;