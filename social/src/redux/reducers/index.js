import comments from './comments.reducer';
import posts from './posts.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    comments,
    posts
});