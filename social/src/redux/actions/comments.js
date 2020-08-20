export const setPostComment = ({ id, comment }) => (
    { payload: { id, comment }, type: 'SET_POST_COMMENT' }
);

export const getPostComments = ({ id }) => (
    { payload: { id }, type: 'GET_POST_COMMENTS' }
);