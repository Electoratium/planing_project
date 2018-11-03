import React from 'react';

import { Link } from 'react-router-dom';

function NotFound () {
    return (
        <div className="row justify-content-center ">
            <h3 className="row col-12 justify-content-center">Sorry this page not found</h3>
            <Link to='/'>Back to home page</Link>
        </div>
    );
}

export default NotFound;
