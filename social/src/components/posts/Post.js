import React from 'react';
import { connect } from 'react-redux';
import { setSelectedPost } from '../../redux/actions/posts';
import { Link } from 'react-router-dom';

const Post = ({ id, title, body, setSelectedPost }) => {

    return (
        <div className="item">
            <div className="ui segment">
                <div className="ui header">{title}</div>
                <div className="ui description">{body}</div>
                <div className="ui section divider" />
                <Link className="ui container right aligned"
                    onClick={() => setSelectedPost({ id, title, body })}
                    to={`/post/${id}`}><i className="icon comments"></i></Link>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    setSelectedPost: post => { dispatch(setSelectedPost(post)) }
});

export default connect(undefined, mapDispatchToProps)(Post);