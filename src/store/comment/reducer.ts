import { Reducer } from 'redux';
import Comment from '../../types/Comment';
import { actionTypes } from './actions';

type CommentState = {
  comments: any;
};

const initialState: CommentState = {
  comments: {},
};

const reducer: Reducer<CommentState> = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case `${actionTypes.FETCH_COMMENT.request}`:
      return {
        ...state,
        isFetching: true,
      };
    case `${actionTypes.FETCH_COMMENT.success}`:    
      return {
        ...state,
        comments: {
          ...state.comments,
          [payload.id]: payload,
        }
      };
    default:
      return state;
  }
};

export { reducer as commentReducer };
