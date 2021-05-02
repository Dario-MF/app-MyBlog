import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";


const PrivateRoute = (props) => {
    const { logged } = useSelector(state => state.auth);

    if (logged) {
        return <Route {...props} />;
    }

    return <Redirect to="/" />;
};

export default PrivateRoute;