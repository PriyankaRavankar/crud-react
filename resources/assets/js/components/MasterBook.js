import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';


class MasterBook extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">

            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="add-item">Create Book</Link></li>
              <li><Link to="display-item">Books</Link></li>
            </ul>
          </div>
      </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default MasterBook;
