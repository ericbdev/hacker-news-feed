import { Reducer } from 'redux';
import Story from '../../types/Story';
import { actionTypes } from './actions';

type StoryState = {
  storyIds: Array<number>;
  stories: Array<Story>;
  isFetching: Boolean;
};

const initialState: StoryState = {
  storyIds: [],
  stories: [],
  isFetching: false,
};

const reducer: Reducer<StoryState> = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case `${actionTypes.FETCH_ID.request}`:
    case `${actionTypes.FETCH_TOP.request}`:
      return {
        ...state,
        isFetching: true,
      };
    case `${actionTypes.FETCH_ID.success}`:
      return {
        ...state,
        stories: [
          ...state.stories,
          payload,  
        ],
        isFetching: false,
      };
    case `${actionTypes.FETCH_TOP.success}`:
      return {
        ...state,
        storyIds: [...state.storyIds, ...payload.storyIds],
        isFetching: false,
      };
    case `${actionTypes.FETCH_ID.error}`:
    case `${actionTypes.FETCH_TOP.error}`:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export { reducer as storyReducer };
