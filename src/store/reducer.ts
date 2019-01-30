import { combineReducers } from 'redux';
import { storyReducer } from './story/reducer';

const rootReducer = combineReducers({
  story: storyReducer
});

export default rootReducer;
