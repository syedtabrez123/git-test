import React from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

class ShowBook extends React.Component {
	constructor() {
		super();
		this.state = ({book: ''});
	}
	componentDidMount() {
		const token = 'FWgtxm0abn8382ZfQUGeFAtt';
		let config = {
			headers: {
				Authorization: 'Bearer ' + token
			}
		}
	    axios.get(`http://api.bookmymovie.com:3001/v1/books/${this.props.match.params.id}`, config)
	    .then(res => {
	      const book = res.data.book;
	      console.log(book);
	      this.setState({ book });
	    });
	}
	render() {
		return (
			<table>
				<thead>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Published Date</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>{this.state.book.title}</td>
					<td>{this.state.book.author}</td>
					<td>{this.state.book.publication_date}</td>
				</tr>
				</tbody>
			</table>
			);
	}
}

export default ShowBook;