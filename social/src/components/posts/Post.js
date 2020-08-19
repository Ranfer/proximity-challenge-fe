import React from 'react';

const Post = ({ id, title, body }) => {
    return (
        <div className="item">
            <div className="ui segment">
                <div className="ui header">{title}</div>
                <div className="ui description">{body}</div>
                <div className="ui section divider" />
                <a className="ui container right aligned"><i className="icon comments"></i></a>
            </div>
        </div>
    )
};

export default Post;