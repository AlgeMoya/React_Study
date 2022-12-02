import React from "react";

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList({users}) {
    return (
        <div>
            {users.map (user => (
                <User user = {user} key={user.id} />
            ))}
            {/* <User user = {users[0]} /> */ }
        </div>
    );
}

export default UserList;