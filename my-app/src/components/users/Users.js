import React, {Component} from 'react'
import UserItem from "./UserItem";
import Spinner from "../../layout/Spinner";
import PropTypes from 'prop-types';

// const Users = ({users, loading}) => {
//     //if its loading show spinner gif else show all users data
//     if (loading) {
//         return <Spinner/>
//     } else {
//         return (
//             <div>
//                 {/*making grid style for each user*/}
//                 <div style={userStyle}></div>
//                 {/* looping through each user and passing it now as props to UserItem */}
//                 {users.map(user => (
//                     <UserItem key={user.id} user={user}</>
//                 ))}
//             </div>
//         );
//     }
// }
// Users.propTypes = {
//     users: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired
// }
//
// const userStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3,1fr)',
//     gridGap: '1rem'
// }


class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'mojombo',
                avatar_url: 'https://avatar0,githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: '2',
                login: 'defunkt',
                avatar_url: 'https://avatar0,githubusercontent.com/u/2?v=4',
                html_url: 'https://github.com/defunkt'
            },
            {
                id: '3',
                login: 'pjhyett',
                avatar_url: 'https://avatar0,githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/pjhyett'
            }
        ]
    }

    render() {
        return (
            <div>
                {/*making grid style for each user*/}
                <div style={userStyle}></div>
                {/* looping through each user and passing it now as props to UserItem */}
                {this.state.map(user => (
                    <UserItem key={user.id} user={user}</>
                ))}
            </div>
        );
    }
}

const userStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap: '1rem'
}