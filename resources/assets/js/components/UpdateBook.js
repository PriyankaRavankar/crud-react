import React, {Component} from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import { Link } from 'react-router';
import Setting from './Setting';


class UpdateBook extends Component {
  constructor(props) {
      super(props);
      this.state = {title: '', author: ''};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    axios.get(Setting.url + `/api/books/${this.props.params.id}/edit`)
    .then(response => {
      this.setState({ title: response.data.title, author: response.data.author });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange1(e){
    this.setState({
      title: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
        author: e.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    const books = {
      title: this.state.title,
      author: this.state.author
    }
    let uri = Setting.url + '/api/books/'+this.props.params.id;
    axios.patch(uri, books).then((response) => {
        browserHistory.push('/display-item');
    });
  }
  render(){
    return (
      <div>
        <h1>Update Book</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/display-item" className="btn btn-success">Return to Book</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Book Title</label>
                <input type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handleChange1} />
            </div>


            <div className="form-group">
                <label name="book_author">Book Author</label>
                <input type="text"
                  className="form-control"
                  onChange={this.handleChange2} value={this.state.author}/>
            </div>


            <div className="form-group">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    )
  }
}
export default UpdateBook;
