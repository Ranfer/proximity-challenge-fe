import React from 'react';
import usePostsResults from '../../services/usePostsResults';
import Post from './Post';
import { connect } from 'react-redux';

const PostsList = (props) => {
    const posts = usePostsResults();

    return (
        <div className="ui relaxed list">{
            posts.map(post => {
                return (
                    <Post {...post} key={post.id} />
                )
            })
        }</div>
    )
}

const mapStateToProps = store => ({
    posts: store.posts.posts
});

export default connect(mapStateToProps)(PostsList);