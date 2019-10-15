import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Countries from './containers/Countries';
import Country from './containers/Country';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

ReactDOM.render(<ApolloProvider client={client}>
  <Router>
    <Switch>
    <Route exact path='/' component={App} />
    <Route path="/countries/:code" component={Country} />
    <Route path="/countries" component={Countries} />      
    </Switch>
  </Router>
  </ApolloProvider>, document.getElementById('root'));



