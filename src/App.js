import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SingUp';
import Home from './pages/Home';

const App = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
