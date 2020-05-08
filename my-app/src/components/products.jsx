import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import Perfume from "../icons/perfume.svg";
import Accesorio from "../icons/accesorios.svg";
import Body from "../icons/body.svg";
import Maquillaje from "../icons/maquillaje.svg";
import Cuidado from "../icons/cuidadopersonal.svg";

export const Products = ({ addProductAtOrder }) => {
	const [products, setProducts] = useState([]);
	const [type, setType] = useState("MAQUILLAJE");

	useEffect(() => {
		firebase
			.firestore()
			.collection("products")
			.where("categoria", "==", type)
			.get()
			.then((querySnapshot) => {
				const array = [];
				querySnapshot.forEach((doc) => {
					array.push({ id: doc.id, ...doc.data() });
				});
				setProducts(array);
			})
			.catch((error) => {
				console.log("Error getting documents: ", error);
			});
	}, [type]);

	return (
		<div className="div-products">
			<div className="group-button">
				<button
					type="button"
					className="button-filter"
					onClick={() => setType("MAQUILLAJE")}
				>
					<img className="icon-filter" src={Perfume} alt="icono de perfume" />
				</button>
				<button
					type="button"
					className="button-filter"
					onClick={() => setType("FRAGANCIAS")}
				>
					<img
						className="icon-filter"
						src={Accesorio}
						alt="icono de accesorio"
					/>
				</button>
				<button
					type="button"
					className="button-filter"
					onClick={() => setType("ACCESORIOS COSMETICOS")}
				>
					<img
						className="icon-filter"
						src={Maquillaje}
						alt="icono de maquillaje"
					/>
				</button>
				<button
					type="button"
					className="button-filter"
					onClick={() => setType("CUIDADO PERSONAL")}
				>
					<img
						className="icon-filter"
						src={Body}
						alt="icono de cuidado del cuerpo"
					/>
				</button>
				<button
					type="button"
					className="button-filter"
					onClick={() => setType("TRATAMIENTO CORPORAL")}
				>
					<img
						className="icon-filter"
						src={Cuidado}
						alt="icono de cuidado del cuerpo"
					/>
				</button>
			</div>
			<div className="container-prod">
				{products.map((product) => {
					if (product.descuento !== "") {
						return (
							<div key={product.id} className="product-div">
								<img
									className="img-product"
									src={product.img}
									alt="imagen del producto"
								/>
								<p style={{fontSize: '1rem', textAlign: 'center'}}>{product.producto}</p>
								<p style={{fontSize: '1rem'}}>{product.categoria}</p>
								<p style={{fontSize: '1rem'}} className="precio">S/.{product.precio}</p>
								<p style={{fontSize: '1rem'}} className="descuento">Dsct: {product.descuento}</p>
								<p style={{fontSize: '1rem'}} className="precio-final">S/.{product.precio_oferta}</p>
								<button
									type="button"
									className="btn-add"
									onClick={() => addProductAtOrder(product)}
								>
									AGREGAR
								</button>
							</div>
						);
					} else {
						return (
							<div key={product.id} className="product-div">
								<img
									className="img-product"
									src={product.img}
									alt="imagen del producto"
								/>
								<p style={{fontSize: '1rem', textAlign: 'center'}}>{product.producto}</p>
								<p style={{fontSize: '1rem'}}>{product.categoria}</p>
								<p style={{fontSize: '1rem'}}>S/.{product.precio}</p>
								<button
									type="button"
									className="btn-add"
									onClick={() => addProductAtOrder(product)}
								>
									AGREGAR
								</button>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};
