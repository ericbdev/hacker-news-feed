import { standardizeAction } from '../utils';
import api from '../../lib/api';

const prefix: string = 'comment';
const actionTypes = {
  FETCH_COMMENT: standardizeAction(`${prefix}/FETCH_COMMENT`),
};

const commentRequest = (itemId: Number) => ({
  type: actionTypes.FETCH_COMMENT.request,
  payload: { itemId },
});

const commentSuccess = payload => ({
  type: actionTypes.FETCH_COMMENT.success,
  payload,
});

const fetchItemComments = payload => dispatch => {
  const { kids } = payload;
  
  kids.slice(0, 20).forEach(itemId => {
    dispatch(commentRequest(itemId));

    api.getCommentById(itemId).then(comment => {
      dispatch(commentSuccess(comment));
    });
  });
};

const actions = {
  fetchItemComments,
};

export { actions, actionTypes };
