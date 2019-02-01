import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import loginActions from '../actions/login';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

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


class User extends Component {
	logout(e) {
		e.preventDefault();

		this.props.onLogout();
	}



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
	handleMobileMenuClose = () => {
		this.setState({ mobileMoreAnchorEl: null });
	};


	render() {
		const { anchorEl, mobileMoreAnchorEl } = this.state;
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


		return (
			<div>
				{renderMobileMenu}
				{renderMenu}
			</div>
		)

		// if (this.props.login.email) {
		// 	return (
		// 		<li>
		// 			<Link to="/profile">{ this.props.login.email}</Link>
		// 			{' '}
		// 			<Link to="/" onClick={e => this.logout(e)}>Logout</Link>
		//
		//
		// 			{renderMobileMenu}
		// 			{renderMenu}
		// 		</li>
		// 	);
		// }
		// return (
		// 	<li>
		// 		<Link to="/login">Login</Link>
		// 		{' '}
		// 		<Link to="/sign-up">Sign Up</Link>
		//
		//
		// 		{renderMobileMenu}
		// 	</li>
		// );
	}
}

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


User.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default connect(
	mapStateToProps,
	matchDispatchToProps,
)(withStyles(styles)(User));