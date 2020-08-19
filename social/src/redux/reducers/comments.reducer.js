const initialState = {
    user: '',
    comment: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_COMMENT": {
            const { data } = action.payload;
            if (!data) {
                return { ...initialState }
            }
            return {
                ...state,
                ...data
            };
        }
        default: {
            return { ...state };
        }
    }
}
