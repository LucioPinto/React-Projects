import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
	return (
		<header style = {headerStyle}>
			<h1>My to-do list</h1>
			<Link to="/" style = {linkStyle}>Home</Link> | <Link to="/about" style = {linkStyle}>About</Link>
		</header>

	);
}

const linkStyle = {
	textDecoration: 'none',
	color: 'white'

}

const headerStyle = {
	background: '#333',
	color: 'white',
	padding: '10px'

}

export default Header;