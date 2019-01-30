import { connect } from 'react-redux';
import { actions } from '../../store/story/actions';
import App from './App';

const mapStateToProps = state => ({
  stories: state.story.stories,
});

const mapDispatchToProps = dispatch => ({
  fetchTopStories: () => dispatch(actions.fetchTopStories({ count: 10 })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
