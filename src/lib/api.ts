import fetch from 'cross-fetch';
import Story from '../types/Story';
import Comment from '../types/Comment';

const apiVersion = 'v0';
const baseURL = `https://hacker-news.firebaseio.com/${apiVersion}`;

const apiRequest = async endpoint => {
  return fetch(`${baseURL}/${endpoint}.json`)
    .then(response => response.json())
    .then(json => json);
};

const getCommentById = async (itemId) => {
  return <Comment> await apiRequest(`item/${itemId}`)
}

const getTopStoryIds = async () => {
  const topStories: Array<Number> = await apiRequest('topstories');
  return topStories
};

const getStoryById = async (storyId) => {
  return <Story> await apiRequest(`item/${storyId}`)
}

const api = {
  getCommentById,
  getTopStoryIds,
  getStoryById,
};

export default api;
