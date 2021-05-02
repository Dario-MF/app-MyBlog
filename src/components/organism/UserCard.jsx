import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { capitalize } from '../../helpers/capitalize';
import UserSocial from '../molecules/UserSocial';

const UserCard = ({ author }) => {
    const { user } = useSelector(state => state.auth);

    return (
        <div className="box_header box_user_header">
            <div className="user_card_box">
                <img src={author.img} className='user_img' alt={author.name} />
                <p className="user_name">{capitalize(`${author.name} ${author.surname}`)}</p>
                <UserSocial user={author} />
                {
                    (user.uid === author.uid) &&
                    <Link to='/edit-user' >
                        <button className='btn_edit_user'>Editar Perfil</button>
                    </Link>
                }
            </div>

        </div>
    );
};

export default UserCard;
