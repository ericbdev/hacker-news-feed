import * as React from 'react';
import Story from '../../types/Story';

type P = {
  fetchTopStories(): void;
  stories: Array<Story>;
};

type S = {
  stories: Array<Story>;
};

class App extends React.Component<P, S> {
  state = {
    stories: [],
  };

  componentDidMount = () => {
    this.props.fetchTopStories();
  };

  render() {
    const { stories } = this.props;
    
    return (
      <div>
        <h1>Hacker News Feed</h1>
        {stories.map(story => (
          <div key={story.id}>{story.title}</div>
        ))}
      </div>
    );
  }
}

export default App;
