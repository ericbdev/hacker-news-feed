import { combineReducers } from 'redux';
import { storyReducer } from './story/reducer';
import { commentReducer } from './comment/reducer';


const rootReducer = combineReducers({
  story: storyReducer,
  comment: commentReducer,
});

export default rootReducer;
