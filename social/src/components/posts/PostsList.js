import React from 'react';
import usePostsResults from '../../services/usePostsResults';
import Post from './Post';

const PostsList = (props) => {
    const posts = usePostsResults();

    return (
        <div className="ui list">{
            posts.map(post => {
                return (
                    <Post {...post} key={post.id} />
                )
            })
        }</div>
    )
}

export default PostsList;