import React from 'react';
import { Link } from 'react-router-dom';


import Drawer from '../Drawer';
// import LoginBar from '../../containers/pages/UserName';

// import CustomAppBar from '../CustomAppBar';

function Header() {
  return (
    <header>
      <Drawer />
      {/*<CustomAppBar />*/}











      {/*<nav>*/}
        {/*<ul className="row col-12 justify-content-around">*/}
          {/*<li>*/}
            {/*<Link to="/">Home</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<Link to="/planing/day">Planing</Link>*/}
          {/*</li>*/}
          {/*<li>Finance</li>*/}

          {/*<LoginBar />*/}

          {/*/!* <li><Link to="/login">Login</Link> | <Link to="/sign-up">Sign Up</Link></li> *!/*/}
        {/*</ul>*/}
      {/*</nav>*/}
    </header>
  );
}

export default Header;
