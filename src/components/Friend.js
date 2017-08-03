import React from 'react';

let friend = function statelessFunctionComponentClass(props) {
    let imageSource = props.source.image;
    let name = props.source.userName;

    return (
        <div className="friend">
            <img className="userImage" src='./images/placeholderuser.png'/>
            <h3 className="userName">{name}</h3>
        </div>
    );
};

export default friend;