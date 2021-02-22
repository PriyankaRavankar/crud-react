require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import MasterBook from './components/MasterBook';
import CreateBook from './components/CreateBook';
import DisplayBook from './components/DisplayBook';
import UpdateBook from './components/UpdateBook';


render(
  <Router history={browserHistory}>
      <Route path="/" component={MasterBook} >
        <Route path="/add-item" component={CreateBook} />
        <Route path="/display-item" component={DisplayBook} />
        <Route path="/edit/:id" component={UpdateBook} />
      </Route>
    </Router>,
        document.getElementById('crud-app'));
