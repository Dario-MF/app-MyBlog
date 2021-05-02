import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteUser } from "../../actions/auth";
import BtnOptions from "../atoms/BtnOptions";




const NavOwnerUser = () => {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();


    const clickDeleteUser = () => {
        dispatch(deleteUser(history, user.uid));
    };

    return (
        <>
            <li className="options_item">
                <Link to='/edit-user' >
                    <BtnOptions btnType="bi bi-pencil" textBtn='Edit User' />
                </Link>
            </li>
            <li className="options_item">
                <BtnOptions btnType="bi bi-trash" textBtn='Delete User' handleClick={clickDeleteUser} />
            </li>
        </>
    );
};

export default NavOwnerUser;