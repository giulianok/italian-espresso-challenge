import React from 'react';
import { Router } from '@reach/router';

import HomeView from './views/Home.view';
import OfficeView from './views/Office.view';

import Header from './components/Header';
import Toolbar from './components/Toolbar';

const App = () => (
  <React.Fragment>
    <Header />
    <Toolbar />
    <main>
      <Router>
        <HomeView path="/" />
        <OfficeView path="/:office" />
      </Router>
    </main>
  </React.Fragment>
);

export default App;
