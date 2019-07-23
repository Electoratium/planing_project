import React, { Component } from 'react';
import MaterialSnackbar from '@material-ui/core/Snackbar';



// to do: turn class component into functional
class SnackBar extends Component {
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
              <MaterialSnackbar
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
export default SnackBar;