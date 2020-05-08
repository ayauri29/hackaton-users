import React, { useState } from "react";
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/home";
import { Products } from "./components/products";
// import { Header } from './components/header';
import { AddOrder } from "./components/shoppingCart";
import ResponsiveMenu from "react-responsive-navbar";
import { FaBars } from "react-icons/fa";
import { IoMdClose, IoMdSearch, IoIosHeartEmpty } from "react-icons/io";
import Logo from "./logo.png";
import Places from "./components/places";
import { Payment } from "./components/payments";
import { Header } from "./components/header";

function App() {
	const [selectProduct, setOrder] = useState([]);

	const incrementar = (prodId, cant) => {
		const arrNew = selectProduct.map((element) => {
			if (prodId === element.id) {
				return {
					...element,
					cantidad: cant,
				};
			}
			return element;
		});
		setOrder(arrNew);
	};

	const Total = () => {
		let acum = 0;
		selectProduct.map((p) => {
			console.log(p.descuento);
			if (p.descuento === "") {
				console.log("Soy sin descuento", p.descuento);
				acum += p.precio * p.cantidad;
			} else {
				console.log("con descuento", p.descuento);
				acum += parseFloat(p.precio_oferta) * p.cantidad;
			}
		});
		return acum;
	};

	return (
		<BrowserRouter>
			<div>
				<Header></Header>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/payment" component={Payment} />
					<Route
						path="/products"
						component={() => (
							<Products
								addProductAtOrder={(product) => {
                  console.log(product, 'product home')
									const found = selectProduct.find((p) => {
										return p.id === product.id;
									});
                  console.log(found, selectProduct, 'select produt')
									if (found !== undefined) {
										const newArr = selectProduct.map((p) => {
											if (found.id === p.id) {
												p.disable = true;
											}
											return p;
										});
										setOrder(newArr);
									} else {
										setOrder([...selectProduct, { ...product, cantidad: 1 }]);
									}
								}}
							/>
						)}
					/>
					<Route
						path="/shopping"
						component={() => (
							<AddOrder
								order={setOrder}
								products={selectProduct}
								cantidad={incrementar}
								total={Total}
								deleteRow={(element) => {
									const newArray = selectProduct.filter((ele) => {
										return element.id !== ele.id;
									});
									setOrder(newArray);
								}}
							/>
						)}
					/>
					<Route path="/places" component={Places} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
