import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import apolloClient from '../apolloClient';
import Layout from './Layout';
import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <div>
            <Layout />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
