import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import loginActions from '../actions/auth';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PropTypes from "prop-types";
import MoreIcon from '@material-ui/icons/MoreVert';

class User extends Component {
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


	logout = () => {
		this.props.onLogout();
		this.handleMenuClose();
	};

	render() {
		const { anchorEl, mobileMoreAnchorEl } = this.state;
		const { classes } = this.props;
		const isMenuOpen = Boolean(anchorEl);
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

		const renderUser = this.props.login.email ?
			(
				<Fragment>
					<div className={classes.sectionDesktop}>
						<IconButton color="inherit">
							<Badge badgeContent={17} color="secondary">
								<NotificationsIcon/>
							</Badge>
						</IconButton>
						<IconButton
							aria-owns={isMenuOpen ? 'material-appbar' : undefined}
							aria-haspopup="true"
							onClick={this.handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle/>
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
							<MoreIcon/>
						</IconButton>
					</div>
				</Fragment>
			) :
			(
				<Link to="/login">
					<Button color="inherit">Login</Button>
				</Link>
			);

		const renderMenu = (
		  <Menu
		    anchorEl={anchorEl}
		    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
		    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
		    open={isMenuOpen}
		    onClose={this.handleMenuClose}
		  >
		    <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
		    <MenuItem onClick={this.logout}>Logout</MenuItem>
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
			<Fragment>
				{renderUser}

				{renderMenu}
				{renderMobileMenu}
			</Fragment>
		)
	}
}

User.propTypes = {
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
)(User);