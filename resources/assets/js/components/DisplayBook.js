import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';
import Setting from './Setting';
class DisplayBook extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', books: ''};
     }
     componentDidMount(){
       axios.get(Setting.url + '/api/books')
       .then(response => {
         this.setState({ books: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })

     }

     tabRow(){
        if(this.state.books instanceof Array){
          return this.state.books.map(function(obj, i){
              return <TableRow obj={obj} key={i} />;

          })
        }
      }


  render(){

   // console.log(this.tabRow());
    return (
      <div>
        <h1>Books</h1>


        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-item">Create Book</Link>
          </div>
        </div><br />


        <table className="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Book Title</th>
                <th>Book Author</th>
                <th width="200px">Actions</th>
            </tr>
            </thead>
            <tbody>
              {this.tabRow()}

            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayBook;
