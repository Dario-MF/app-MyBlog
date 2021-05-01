import React, { useEffect, useState } from 'react';
import { fetchNotToken } from '../../helpers/fetch';
import UserCard from '../organism/UserCard';
import UserPosts from '../organism/UserPosts';


const UserScreen = ({ match }) => {

    const [dataUser, setDataUser] = useState({
        data: null,
    });

    const endPoint = `posts?author=${match.params.idUser}&page=1`;

    useEffect(() => {
        fetchNotToken(endPoint)
            .then(resp => resp.json())
            .then(resp => {
                setDataUser({
                    data: resp.data
                });
            })
            .catch(error => {
                console.log(error)
            })
    }, [endPoint]);


    return (
        <div className="user_screen">
            <div className=" user_header home_header">
                {
                    (dataUser.data) && <UserCard author={dataUser.data.author} />
                }
            </div>
            {
                (dataUser.data) && <UserPosts posts={dataUser.data.posts} />
            }

        </div>
    );
};


export default UserScreen;
