import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { actions } from '../../store/comment/actions';
import Story from '../../types/Comment';
import Comment from '../../types/Comment';

const styles = theme => ({
  commentRoot: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
});

type P = {
  fetchItemComments(payload): void;
  story: Story;
  comments: Array<Comment>;
  classes: any;
};

type CommentProps = {
  comment: Comment;
  key: number;
};

const Comment = (props: CommentProps) => {
  const comment = props.comment;

  return (
    <li>
      <Typography component='p' variant='body2'>
        {comment.text}
      </Typography>
    </li>
  )
};

class Comments extends React.Component<P> {
  componentDidMount = () => {
    const { kids } = this.props.story;

    this.props.fetchItemComments({ kids });
  };

  render() {
    const { story, comments, classes } = this.props;

    return (
      <div className={classes.commentRoot}>
        <Typography component='h6' variant='subtitle2'>
          Comments
        </Typography>
        <ul>
          {story.kids.map(itemId => {
            return comments[itemId] && (
              <Comment key={itemId} comment={comments[itemId]} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Comments);
