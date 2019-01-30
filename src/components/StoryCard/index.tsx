import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Story from '../../types/Story';
import Comments from '../Comments/';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardParagraph: {
    marginTop: theme.spacing.unit * 2,
  },
});

type P = {
  story: Story;
  classes: any;
};

class StoryCard extends React.PureComponent<P> {
  render() {
    const { story, classes } = this.props;

    return (
      <Grid item xs={12} md={6}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                <Link 
                  href={story.url}
                  target='_blank'
                  block
                  underline='hover'
                >
                  {story.title}
                </Link>
              </Typography>
              {story.text && (
                <Typography 
                  variant='body2'
                  className={classes.cardParagraph}
                >
                  {story.text}
                </Typography>
              )}
              {story.url && (
                <Typography
                  variant='body2'
                  color='primary'
                  className={classes.cardParagraph}
                >
                  <Link href={story.url} target='_blank'>
                    Continue reading...
                  </Link>
                </Typography>
              )}
              {(story.kids && story.kids.length) && 
                <Comments story={story} />
              }
            </CardContent>
          </div>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(StoryCard);
