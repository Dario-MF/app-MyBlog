import { Redirect, Route } from "react-router";


const PrivateRoute = (props) => {
    const { isAuthenticated } = props

    if (isAuthenticated) {
        return <Route {...props} />;
    }

    return <Redirect to="/" />;
};

export default PrivateRoute;