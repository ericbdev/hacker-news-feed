import { standardizeAction } from '../utils';
import api from '../../lib/api';

const prefix: string = 'story';
const actionTypes = {
  FETCH_TOP: standardizeAction(`${prefix}/FETCH_TOP`),
  FETCH_ID: standardizeAction(`${prefix}/FETCH_ID`),
};

const topStoriesRequest = (count: number) => ({
  type: actionTypes.FETCH_TOP.request,
  payload: { count },
});

const topStoriesSuccess = payload => ({
  type: actionTypes.FETCH_TOP.success,
  payload,
});

const storyRequest = (itemId: Number) => ({
  type: actionTypes.FETCH_ID.request,
  payload: { itemId },
});

const storySuccess = payload => ({
  type: actionTypes.FETCH_ID.success,
  payload,
});

const fetchTopStories = payload => dispatch => {
  dispatch(topStoriesRequest(payload.count));

  api.getTopStoryIds().then(response => {
    const topStories = response.slice(0, 10);
    dispatch(topStoriesSuccess({ storyIds: topStories }));

    // TODO: This should be its own dispirate action
    topStories.forEach(storyId => {
      dispatch(storyRequest(storyId));

      api.getStoryById(storyId).then(story => {
        dispatch(storySuccess(story));
      });
    });
  });
};

const actions = {
  fetchTopStories,
};

export { actions, actionTypes };
