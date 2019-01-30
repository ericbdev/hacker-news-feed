import { connect } from 'react-redux';
import { actions } from '../../store/comment/actions';
import Comments from './Comments';

const mapStateToProps = state => ({
  comments: state.comment.comments,
});

const mapDispatchToProps = dispatch => ({
  fetchItemComments: (payload) => dispatch(actions.fetchItemComments(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);
