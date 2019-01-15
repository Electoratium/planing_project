import React from 'react';
import {ValidatorComponent} from 'react-form-validator-core';

class LoginField extends ValidatorComponent {

    render() {
        const { errorMessages, validators, requiredError, validatorListener, labelText, inputId, ...rest } = this.props;

        return (
            <div className="form-label-group">
                <input
                    id={inputId}
                    {...rest}
                    placeholder={labelText}
                    className="form-control"
                    ref={(r) => { this.input = r; }}
                />
                <label htmlFor={inputId}>{ labelText }</label>
                <div>
                    <small className="text-danger">
                        {this.errorText()}
                    </small>
                </div>
            </div>
        );
    }

    errorText() {
        const { isValid } = this.state;

        if (isValid) {
            return null;
        }

        return (
            <div style={{ color: 'red' }}>
                {this.getErrorMessage()}
            </div>
        );
    }
}

export default LoginField;