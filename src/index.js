import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import Stack from './components/Stack';
import StackForm from './components/StackForm';
import rootReducer from './reducers';

import './index.css'

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/stack" component={Stack} />
        <Route path="/stack_form" component={StackForm} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)