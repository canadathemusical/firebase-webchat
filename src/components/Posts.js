import React from 'react';
import Post from './Post.js'
let PostsArray = [
    {
        postId: '12',
        poster: 'Chase',
        post: 'Need help with a problem.',
        Chat: [{user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},]
    },
    {
        postId: '13',
        poster: 'Chase',
        post: 'Need help with a problem.',
        Chat: [{user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},]
    },
    {
        postId: '14',
        poster: 'mark',
        post: 'Need help with a problem.',
        Chat: [{user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},]
    }
    ,
    {
        postId: '1457',
        poster: 'Chase',
        post: 'Need help with a problem.',
        Chat: [{user: 'mark', message: 'ill lend a hand'},
            {user: 'chris', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},]
    },
    {
        postId: '1458',
        poster: 'alex',
        post: 'Need help with a problem.',
        Chat: [{user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},]
    },
    {
        postId: '1459',
        poster: 'danny',
        post: 'Need help with a problem.',
        Chat: [{user: 'mark', message: 'ill lend a hand'},
            {user: 'danny', message: 'ill lend a hand'},
            {user: 'gregg', message: 'ill lend a hand'},]
    },
    {
        postId: '146',
        poster: 'Chase',
        post: 'Need help with a problem.',
        Chat: [{user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},]
    },
    {
        postId: '147',
        poster: 'Chase',
        post: 'Need help with a problem.',
        Chat: [{user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},]
    },
    {
        postId: '148',
        poster: 'Chase',
        post: 'Need help with a problem.',
        Chat: [{user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},
            {user: 'mark', message: 'ill lend a hand'},]
    }
];

let Posts = React.createClass({

    createpost: function (post) {
        return <Post source={post} key={post.postId} />;
    },

    createposts: function (posts) {
        return posts.map(this.createpost);
    },

    render: function () {
        return <div className="container postsContainer">
            <div className="PostNav header">
                <select className="classSelect">
                    <option value="math">Math</option>
                    <option value="beer">Beer</option>
                    <option value="wings">Wings</option>
                    <option value="cool">Cool</option>
                </select>
            </div>
            <div className="posts">
                {this.createposts(PostsArray)}
            </div>
        </div>;
    }
});

export default Posts;