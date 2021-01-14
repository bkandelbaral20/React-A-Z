import React, {Component} from 'react'
import UserItem from "./UserItem";
import Spinner from "../../layout/Spinner";
import PropTypes from 'prop-types';

const Users = ({users, loading}) => {
    //if its loading show spinner gif else show all users data
    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div>
                {/*making grid style for each user*/}
                <div style={userStyle}></div>
                {/* looping through each user and passing it now as props to UserItem */}
                {users.map(user => (
                    <UserItem key={user.id} user={user}</>
                ))}
            </div>
        );
    }
}
Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}