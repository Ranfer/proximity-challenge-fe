import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setPostComment } from '../../redux/actions/comments';

const AddComment = ({ id, setPostComment }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = (evt) => {
        evt.preventDefault();
        setPostComment({ id, comment: { email, name, body } });
        setEmail('');
        setName('');
        setBody('');
    }

    return (
        <div className="ui container text">
            <h3 className="ui dividing header">Add a comment</h3>
            <form className="ui form" onSubmit={onSubmit}>
                <div className="equal width fields">
                    <div className="field">
                        <label htmlFor="form-input-control-email">Email</label>
                        <div className="ui input">
                            <input type="text" placeholder="Email" id="form-input-control-email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="form-input-control-title">Title</label>
                        <div className="ui input">
                            <input type="text" placeholder="Title" id="form-input-control-title"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label>Comment</label>
                    <textarea placeholder="Tell us what you think" rows="3"
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <button type="submit" className="ui button">Submit</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setPostComment: (id, comment) => { dispatch(setPostComment(id, comment)) }
})

export default connect(undefined, mapDispatchToProps)(AddComment);