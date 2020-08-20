import React from 'react';
import usePostCommentsResults from '../../services/usePostCommentsResults';
import { connect } from 'react-redux';
import AddComment from '../comments/AddComment';

const PostComments = ({ id, commentsState }) => {

    const comments = usePostCommentsResults(id);
    const userComments = commentsState[id] || [];
    const allComments = [...comments, ...userComments];


    return (
        <div className="ui comments container text">
            <h3 className="ui dividing header">Comments</h3>
            {
                allComments.map(({ id, name, email, body }) => {
                    return (
                        <div className="comment" key={id}>
                            <div className="avatar">
                                <i className="icon comment large"></i>
                            </div>
                            <div className="content">
                                <label className="author">{email}</label>
                                <div className="metadata">{name}</div>
                                <div className="text">{body}</div>
                            </div>
                        </div>
                    )
                })
            }
            <AddComment id={id} />
        </div>
    )
}

const mapStateToProps = store => ({
    commentsState: store.comments
})

export default connect(mapStateToProps)(PostComments);