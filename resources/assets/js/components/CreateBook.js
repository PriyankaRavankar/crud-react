import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Setting from './Setting';
import { Message, Form } from "semantic-ui-react";

class CreateBook extends Component {
  constructor(props){
    super(props);
    this.state = {

        bookTitle: '',
        bookAuthor: ''};


    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }
  handleChange1(e){
    this.setState({
        bookTitle: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
        bookAuthor: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const books = {
      title: this.state.bookTitle,
      author: this.state.bookAuthor
    }
    let uri = Setting.url + '/api/books';
    axios.post(uri, books).then((response) => {
        browserHistory.push('/display-item');
      });
  }


    render() {
      return (
      <div>
        <h1>Create Book</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Book Title:</label>
                <input type="text" className="form-control" required onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Book Author:</label>
                  <input type="text" className="form-control" required onChange={this.handleChange2}/>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Book</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateBook;
