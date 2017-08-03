import React from 'react';

let Post = function statelessFunctionComponentClass(props) {
    let postId = props.source.postId;
    let poster = props.source.poster;
    let post = props.source.post;
    return (
        <div className="post animated slideUp" data-postid={postId}>
            <div className="postContent">
                <img className="userImage" src=''/>
                <h3 className="userName">{poster}</h3>
                <p className="postText">{post}</p>
            </div>
            <div className="chatContainer">
                <div className="chatMessages">
                    <p className="chatMessage"><span className="chatUser">UserName</span> a test massage</p>
                </div>
                <div className="message">
                    <input className="text"/>
                    <button className="send">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Post;