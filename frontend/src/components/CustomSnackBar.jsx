import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class CustomSnackBar extends Component {
    state = {
        open: true,
        position: {
            vertical: 'top',
            horizontal: 'center',
        }
    };

    handleClose = ()  => {
        this.setState({open: false});
    };
    render () {
        return (
            <div>
              <Snackbar
                anchorOrigin={this.state.position}
                open={this.state.open}
                onClose={this.handleClose}
                autoHideDuration={4000}
                message={this.props.message}
              />
            </div>
        );
    }

}
export default CustomSnackBar;