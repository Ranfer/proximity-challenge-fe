const initialState = {
    selectedPost: undefined,
    posts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_SELECTED_POST": {
            return { ...state, selectedPost: action.payload }
        }
        default: {
            return { ...state };
        }
    }
}
