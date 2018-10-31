import React from 'react';
import { Link } from '@reach/router';

const Toolbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/new-york">New York</Link>
      </li>
      <li>
        <Link to="/dublin">Dublin</Link>
      </li>
    </ul>
  </nav>
);

Toolbar.displayName = 'Toolbar';

export default Toolbar;
