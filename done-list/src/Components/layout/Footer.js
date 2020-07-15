import React from 'react';

function Footer() {
	return (
		<footer style = {footerStyle}/>
	);
}

const footerStyle = {
	background: '#4d0000',
    clear: 'both',
    position: 'fixed',
    bottom: '0',
    left: '0',
	width: '100%',
	height: '20px'
}

export default Footer;