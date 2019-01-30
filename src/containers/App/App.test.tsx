import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { sampleStories } from '../../samples/stories';

describe('App Component', () => {
  const mockFetchTopStories = jest.fn();
  const wrapper = shallow(
    <App stories={sampleStories} fetchTopStories={mockFetchTopStories} />,
  );

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should get top stories', () => {
    expect(mockFetchTopStories.mock.calls.length).toBe(1)
  });
});
