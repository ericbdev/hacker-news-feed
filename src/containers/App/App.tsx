import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Story from '../../types/Story';
import StoryCard from '../../components/StoryCard';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  header: {
    marginTop: theme.spacing.unit * 2,
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
});

type P = {
  fetchTopStories(): void;
  stories: Array<Story>;
  classes: any;
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
    const { stories, classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <header className={classes.header}>
            <Typography
              component='h1'
              variant='h5'
              color='inherit'
              align='center'
              noWrap
            >
              Hacker News Feed
            </Typography>
          </header>

          <main>
            <Grid container spacing={16} className={classes.mainGrid}>
              {stories.map(story => (
                <StoryCard story={story} key={story.id}/>
              ))}
            </Grid>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
