import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Makeup Store
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={Link} to="/">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/products">
						Productos
					</Nav.Link>
					<Nav.Link as={Link} to="/shopping">
						Carrito
					</Nav.Link>
					<Nav.Link as={Link} to="/places">
						Places
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
