import * as React from 'react';

type P = {
  title: string;
  fetchTopStories(): void;
  stories: Array<any>;
};

type S = {
  stories: Array<any>;
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
        <h1>{this.props.title}</h1>
        {stories.map(story => (
          <div key={story.id}>{story.title}</div>
        ))}
      </div>
    );
  }
}

export default App;
