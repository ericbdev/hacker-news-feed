import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Story from '../../types/Comment';
import Comment from '../../types/Comment';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import {ExpandMore} from '@material-ui/icons'; 

const styles = theme => ({
  commentRoot: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  commentList: {
    listStyle: 'none',
    marginTop: 0,
    paddingLeft: 0,
  },
  commentListItem: {
    '&:not(:first-child)': {
      borderTop: `1px solid currentColor`,
      marginTop: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit * 2,
    }
  },
  commentCredits: {
    fontSize: '90%',
    marginTop: theme.spacing.unit
  }
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
  classes: any;
};

const Comment = (props: CommentProps) => {
  const {comment, classes} = props;

  return (
    <li className={classes.commentListItem}>
      <Typography component='div' variant='body1'>
        {comment.text}
        
        <div className={classes.commentCredits}>
          by: <em>{ comment.by }</em>
        </div>
      </Typography>
    </li>
  )
};

const CommentListItem = withStyles(styles)(Comment);

class Comments extends React.Component<P> {
  componentDidMount = () => {
    const { kids } = this.props.story;

    this.props.fetchItemComments({ kids });
  };

  render() {
    const { story, comments, classes } = this.props;

    return (
      <div className={classes.commentRoot}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography component='h6' variant='subtitle2'>
            Comments
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <ul className={classes.commentList}>
            {story.kids.map(itemId => {
              return comments[itemId] && (
                <CommentListItem key={itemId} comment={comments[itemId]} />
              );
            })}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
        
      </div>
    );
  }
}

export default withStyles(styles)(Comments);
