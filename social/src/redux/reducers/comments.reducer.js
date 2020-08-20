const initialState = {
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_POST_COMMENT": {
            const { id, comment } = action.payload;
            let comments = state[id] || [];
            comments.push({ id: `user-${comments.length}` , ...comment });
            return { ...state, [id]: comments }
        }
        default: {
            return { ...state };
        }
    }
}
