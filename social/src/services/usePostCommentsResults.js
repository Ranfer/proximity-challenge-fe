import { useMemo, useState } from 'react';

const usePostCommentsResults = (id) => {
    const [postComments, setPostComments] = useState([]);

    useMemo(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(response => response.json()).then(json => setPostComments(json));
    }, [id, setPostComments])

    return postComments;
}

export default usePostCommentsResults;