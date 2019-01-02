import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';

class InputValidate extends ValidatorComponent {

    render() {
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;

        return (
            <div>
                <input
                    {...rest}
                    ref={(r) => { this.input = r; }}
                />
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

export default InputValidate;