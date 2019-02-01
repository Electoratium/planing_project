import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {bindActionCreators} from "redux";
import loginActions from "../actions/login";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


// import User from '../containers/User'


const styles = theme => ({
	root: {
		width: '100%',
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
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

class CustomAppBar extends Component {
	state = {
		anchorEl: null,
		mobileMoreAnchorEl: null,
	};

	handleProfileMenuOpen = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleMenuClose = () => {
		this.setState({ anchorEl: null });
		this.handleMobileMenuClose();
	};

	handleMobileMenuOpen = event => {
		this.setState({ mobileMoreAnchorEl: event.currentTarget });
	};

	handleMobileMenuClose = () => {
		this.setState({ mobileMoreAnchorEl: null });
	};


	renderUser = () => {
		return this.props.login.email ?
			(
				<div className={classes.sectionDesktop}>
							<IconButton color="inherit">
								<Badge badgeContent={17} color="secondary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
							<IconButton
								aria-owns={isMenuOpen ? 'material-appbar' : undefined}
								aria-haspopup="true"
								onClick={this.handleProfileMenuOpen}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
								<MoreIcon />
							</IconButton>
						</div>
			)
	;

	render() {
		const { anchorEl, mobileMoreAnchorEl } = this.state;
		const { classes } = this.props;
		const isMenuOpen = Boolean(anchorEl);
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

		const renderMenu = (
		  <Menu
		    anchorEl={anchorEl}
		    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
		    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
		    open={isMenuOpen}
		    onClose={this.handleMenuClose}
		  >
		    <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
		    <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
		  </Menu>
		);

		const renderMobileMenu = (
			<Menu
				anchorEl={mobileMoreAnchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMobileMenuOpen}
				onClose={this.handleMobileMenuClose}
			>
				<MenuItem>
					<IconButton color="inherit">
						<Badge badgeContent={11} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<p>Notifications</p>
				</MenuItem>
				<MenuItem onClick={this.handleProfileMenuOpen}>
					<IconButton color="inherit">
						<AccountCircle />
					</IconButton>
					<p>Profile</p>
				</MenuItem>
			</Menu>

		);



		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
							<MenuIcon />
						</IconButton>
						<Typography className={classes.title} variant="h6" color="inherit" noWrap>
							Logo
						</Typography>

						<div className={classes.grow} />


									{/*if (this.props.login.email) {*/}
				{/*return (*/}
					{/*<li>*/}
						{/*<Link to="/profile">{ this.props.login.email}</Link>*/}
						{/*{' '}*/}
						{/*<Link to="/" onClick={e => this.logout(e)}>Logout</Link>*/}


						{/*{renderMobileMenu}*/}
						{/*{renderMenu}*/}
					{/*</li>*/}
				{/*);*/}
			{/*}*/}
			{/*return (*/}
				{/*<li>*/}
					{/*<Link to="/login">Login</Link>*/}
					{/*{' '}*/}
					{/*<Link to="/sign-up">Sign Up</Link>*/}


					{/*{renderMobileMenu}*/}
				{/*</li>*/}
			{/*);*/}
							{this.renderUser()}
					</Toolbar>
				</AppBar>



				{renderMenu}
				{renderMobileMenu}
			</div>
		);
	}
}

CustomAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};



function mapStateToProps(state) {
	return {
		login: state.login,
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		onLogout: loginActions.logout,
	}, dispatch);
}

export default connect(
	mapStateToProps,
	matchDispatchToProps,
)(withStyles(styles)(CustomAppBar));

// export default withStyles(styles)(CustomAppBar);
