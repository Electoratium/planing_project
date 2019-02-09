import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// change to MaterialDrawer to ensure names conflict
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../../modules/styleConstants';

import User from '../../containers/User';


const styles = theme => ({

  deleteStyle: {
    width: '40vw',
    display: 'flex',
    'justify-content': 'space-around',
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});
class AppBar extends Component {
  render() {
    const { classes, isOpen, setOpenDrawer } = this.props;

    return (
      <Fragment>
        <MaterialAppBar
          position="fixed"
          className={classNames(classes.appBar, {
					  [classes.appBarShift]: isOpen,
          })}
        >
          <Toolbar disableGutters={!isOpen}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={setOpenDrawer}
              className={classNames(classes.menuButton, {
							  [classes.hide]: isOpen,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              <Link to="/">Logo</Link>
            </Typography>
            <div className={classes.grow} />

            <div className={classes.deleteStyle}>
              <span><Link to="/planing/day">Planing</Link></span>
              <span><Link to="/">Finance</Link></span>
            </div>

            <User classes={classes} />
          </Toolbar>

        </MaterialAppBar>
      </Fragment>
    );
  }
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpenDrawer: PropTypes.func.isRequired,

};

export default withStyles(styles)(AppBar);
