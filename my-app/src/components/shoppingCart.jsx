/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { Stripe } from "../components/stripe";
import "firebase/firestore";
// import {Pay} from './pay';
import "../App.css";
import Car from "../icons/car.png";
import Pin from "../icons/pin.png";
import Group from "../icons/Group.png";

export const AddOrder = ({ products, cantidad, total, deleteRow, order }) => {
  console.log(products, 'shopping')

	const addOrder = (product, date, estado, total) =>
		firebase.firestore().collection("order").add({
			product,
			date,
			total,
		});

	const validateOrder = () => {
		return products.length > 0;
	};

	const disableSubmitButton = !validateOrder();

	return (
		<div className="flex">
			<h2>Carro de compras</h2>
			<div>
				<div>
					{products.map((product) => {
						if (product.descuento === "") {
							return (
								<div key={product.id} className="pedidos">
									<img
										className="img-order"
										src={product.img}
										alt="imagen del producto"
									/>

									<div className="second">
										<p className="fontp">{product.categoria}</p>
										<p>{product.producto}</p>
										<p className="fontp">Precio: S/.{product.precio}</p>
										<p>Cantidad </p>
										<input
											className="tres"
											type="number"
											min="1"
											max="100"
											defaultValue={product.cantidad}
											onClick={(e) => {
												const p = e.target.value;
												cantidad(product.id, p);
											}}
										/>
									</div>

									<p className="size">
										<i
											className="fa fa-trash"
											aria-hidden="true"
											onClick={() => {
												deleteRow(product);
											}}
										/>
									</p>
								</div>
							);
						} else {
							return (
								<div key={product.id} className="pedidos">
									<img
										className="img-order"
										src={product.img}
										alt="imagen del producto"
									/>

									<div className="second">
										<p className="fontp">{product.categoria}</p>
										<p className="bold">{product.producto}</p>
										<p className="fontp">Precio: S/.{product.precio}</p>
										<p className="fontDesc">
											Descuento: S/.{product.descuento}
										</p>
										<p className="fontp2">
											Precio final: S/.{product.precio_oferta}
										</p>
										{/* <p>S/.{parseFloat(product.precio_oferta) * product.cantidad}</p> */}
										<label>Cantidad</label>
										<input
											className="tres"
											type="number"
											min="1"
											max="100"
											defaultValue={product.cantidad}
											onClick={(e) => {
												const p = e.target.value;
												cantidad(product.id, p);
											}}
										/>
									</div>

									<p className="size">
										<i
											className="fa fa-trash"
											aria-hidden="true"
											onClick={() => {
												deleteRow(product);
											}}
										/>
									</p>
								</div>
							);
						}
					})}
				</div>
			</div>
			<p className="total">
				Total = S/.
				{total()}
			</p>

			<button
				type="button"
				className="button-pay"
				onClick={() => {
					if (!disableSubmitButton) {
						addOrder(products, new Date(), "pendiente", total()).then(() => {
							order([]);
						});
					}
				}}
				disabled={disableSubmitButton}
			>
				<div className="flex-class">
					<img className="img-size" src={Pin} alt="Icono car shop"></img>
					<div className="color-letter">
						<h3>Comprar online</h3>
						<p>Los productos te llegan a la dirección que elijas</p>
					</div>
				</div>
			</button>

			{/* <button
				type="button"
				className="button-pay"
				onClick={() => {
					if (!disableSubmitButton) {
						addOrder(products, new Date(), "pendiente", total()).then(() => {
							order([]);
						});
					}
				}}
				disabled={disableSubmitButton}
			>
				<div className="flex-class">
					<img className="img-size" src={Car} alt="Icono car shop"></img>
					<div className="color-letter">
						<h3>Tiendas BELCORP</h3>
						<p>Elije los productos, retira y paga en cualquier tienda.</p>
					</div>
				</div>
			</button> */}

			{/* <button
				type="button"
				className="button-pay"
				onClick={() => {
					if (!disableSubmitButton) {
						addOrder(products, new Date(), "pendiente", total()).then(() => {
							order([]);
						});
					}
				}}
				disabled={disableSubmitButton}
			>
				<div className="flex-class">
					<img className="img-size" src={Group} alt="Icono car shop"></img>
					<div className="color-letter">
						<h3>Consultora</h3>
						<p>Elije los productos y una consultoras te lo entregará.</p>
					</div>
				</div>
			</button> */}

			{/* <Stripe></Stripe> */}
		</div>
	);
};
