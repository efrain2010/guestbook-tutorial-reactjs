import React from 'react';
import {
  Switch, Route, Redirect, Link,
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { useStoreState } from '../../hooks';
import useStyles from './styles';
import Home from '../Home';

const App: React.FC = () => {
  const classes = useStyles();
  const entries = useStoreState((state) => state.guestbook.entries);

  console.log(entries);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            🍔
          </IconButton>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
        </Toolbar>
      </AppBar>
      <div className="App">
        <div>
          <Link to="/">Home Page</Link>
          <span> | </span>
          <Link to="/about">About Page</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about">
            <h1>About page</h1>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
