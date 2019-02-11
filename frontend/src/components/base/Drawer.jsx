import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// change to MaterialDrawer to ensure names conflict
import MaterialDrawer from '@material-ui/core/Drawer';
import AppBar from './AppBar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from "react-router-dom";
import constants from '../../modules/constants';
import {drawerWidth} from '../../modules/styleConstants';

const styles = theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing.unit * 7 + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing.unit * 9 + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
});

class Drawer extends React.Component {
	state = {
		open: false,
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes, theme, children} = this.props;

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar isOpen={this.state.open}  setOpenDrawer={this.handleDrawerOpen} />


				<MaterialDrawer
					variant="permanent"
					className={classNames(classes.drawer, {
						[classes.drawerOpen]: this.state.open,
						[classes.drawerClose]: !this.state.open,
					})}
					classes={{
						paper: classNames({
							[classes.drawerOpen]: this.state.open,
							[classes.drawerClose]: !this.state.open,
						}),
					}}
					open={this.state.open}
				>
					<div className={classes.toolbar}>
						<IconButton onClick={this.handleDrawerClose}>
							{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
						</IconButton>
					</div>
					<Divider />
					<List>
						{constants.planingTabs.map( tab => (
							<Link to={tab.url} key={tab.name}>
								<ListItem button>
									<ListItemIcon>
										<MailIcon />
									</ListItemIcon>
									<ListItemText primary={tab.name} />
								</ListItem>
							</Link>
						))}
					</List>
					<Divider />
					<List>
						{constants.utilityTabs.map(tab => (
							<Link to={tab.url} key={tab.name}>
								<ListItem button>
									<ListItemIcon>
										<InboxIcon />
									</ListItemIcon>
									<ListItemText primary={tab.name} />
								</ListItem>
							</Link>
						))}
					</List>
				</MaterialDrawer>
				<main className={classes.content}>
					<div className={classes.toolbar} />

					{ children }
				</main>
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(Drawer);