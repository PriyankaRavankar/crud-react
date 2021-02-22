import React,{ useState, useEffect, Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { Link, browserHistory } from 'react-router';
import Setting from './Setting';


class TableRow extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
if (!confirm('Are you sure ?')) {
    return false
 }
 try {
    let uri = Setting.url + `/api/books/${this.props.obj.id}`;
     axios.delete(uri);
     browserHistory.push('/');

       return

 } catch (error) {
    Swal.fire({
       icon: 'error',
       title: error.message
    })
 }

  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.author}
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
            <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
           <input type="submit" value="Delete" className="btn btn-danger"/>
         </form>
          </td>
        </tr>
    );
  }
}


export default TableRow;
