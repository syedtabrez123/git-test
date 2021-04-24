import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div>
			      <Link to="/">Home </Link>
			      <Link to="/store">Books Store</Link>
			    </div>
			</nav>
			);
	}
}
export default Navbar;
