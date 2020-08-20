import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostComments from './PostComments';

const PostDetail = ({ selectedPost, history }) => {


    if (!selectedPost) {
        history.push('/');
        return <div>Getting back to list.</div>
    }

    const { id, title, body } = selectedPost;
    return (
        <>
            <Link className="ui container left aligned"
                to={`/`}><i className="icon angle double left large"></i> Go Back</Link>
            <div className="ui section divider" />
            <div className="ui container">
                <div className="item">
                    <div className="ui header">{title}</div>
                    <div className="ui description">{body}</div>
                </div>
                <PostComments id={id} />
            </div>
        </>
    )
};

const mapStateToProps = store => ({
    selectedPost: store.posts.selectedPost
});


export default connect(mapStateToProps)(PostDetail);