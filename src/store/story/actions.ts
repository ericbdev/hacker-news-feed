import { standardizeAction } from '../utils';
import { sampleStories } from '../../samples/stories';

const prefix: string = 'story';
const actionTypes = {
  FETCH_TOP: standardizeAction(`${prefix}/FETCH_TOP`),
  FETCH_ID: standardizeAction(`${prefix}/FETCH_ID`),
};

const requestTopStories = (count: number) => ({
  type: actionTypes.FETCH_TOP.request,
  payload: { count },
});

const receiveTopStories = payload => ({
  type: actionTypes.FETCH_TOP.success,
  payload,
});

const fetchTopStories = payload => dispatch => {
  dispatch(requestTopStories(payload.count));
  dispatch(receiveTopStories({ stories: sampleStories }));
};

const actions = {
  fetchTopStories,
};

export { actions, actionTypes };
