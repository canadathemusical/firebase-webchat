import React from 'react';
import Friend from './Friend.js';
let friendsArray = [
    {userName:'mark',image:'image.png'},
    {userName:'joe',image:'image2.png'},
    {userName:'tom',image:'image.3png'}
    ];

let Friends = React.createClass({

    createfriend: function (friend) {
        return <Friend source={friend} key={friend.userName} />;
    },

    createfriends: function (friends) {
        return friends.map(this.createfriend);
    },

    render: function () {
        return <div className="container friendsContainer">
            <div className="friendsHeader header">
                <h2>Class mates</h2>
            </div>
            <div className="friends">
                {this.createfriends(friendsArray)}
            </div>
        </div>;
    }
});

export default Friends;

