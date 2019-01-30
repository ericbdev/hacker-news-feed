import { standardizeAction } from '../utils';

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
  const stories = [
    {
      id: 1,
      title: 'Test 1',
    },
    {
      id: 2,
      title: 'Test 2',
    },
  ];

  dispatch(requestTopStories(payload.count));
  dispatch(receiveTopStories({ stories }));
};

const actions = {
  fetchTopStories,
};

export { actions, actionTypes };
