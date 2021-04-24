import React from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import ShowBook from './home/ShowBook';

class Books extends React.Component {
	constructor() {
		super();
		this.state = ({books: []});
	}

	componentDidMount() {
		const token = 'FWgtxm0abn8382ZfQUGeFAtt';
		let config = {
			headers: {
				Authorization: 'Bearer ' + token
			}
		}
    axios.get(`http://api.bookmymovie.com:3001/v1/books`, config)
    .then(res => {
      const books = res.data.books;
      this.setState({ books });
    });
  }

	render() {
		const list = this.state.books;
		let bookList = list.map((book) => {
      return(
	      	<li key={book.id}><Link to={{pathname: `/book/${book.id}`}}>{book.title}</Link></li>
      	);
    });

		return (
			<div>
				<h1>Books Store</h1>
				<ul>{bookList}</ul>
			</div>
		);
	}
}

export default Books;