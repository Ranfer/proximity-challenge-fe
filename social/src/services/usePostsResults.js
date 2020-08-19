import { useMemo, useState } from 'react';

const usePostsResults = props => {
    const [posts, setPosts] = useState([]);

    useMemo(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(json => setPosts(json));
    }, [setPosts])

    return posts;
}

export default usePostsResults;