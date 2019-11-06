/* eslint-disable no-unused-vars */
import React, {Link} from "react";
import firebase from "firebase/app";
import { Stripe } from "../components/stripe";
import "firebase/firestore";
// import {Pay} from './pay';
import "../App.css";
import {Payment} from '../components/payments';



export const AddOrder = ({ products, cantidad, total, deleteRow, order }) => {
  /* const [name, setName] = useState('');
  const [mesa, setMesa] = useState(''); */

  /* const functionName = (e) => {
    setName(e.target.value);
  };
  const functionMesa = (e) => {
    setMesa(e.target.value);
  }; */
  const addOrder = (product, date, estado, total) =>
    firebase
      .firestore()
      .collection("order")
      .add({
        product,
        date,
        total,
      });

  const validateOrder = () => {
     return products.length > 0;
  };

  const disableSubmitButton = !validateOrder();

  return (
    <div className="Order">
      <h2>Carro de compras</h2>
      {/* <p>{Date(Date.now()).toString()}</p> */}
      {/* <div>
        <label>
          Cliente:
          {' '}
          <input placeholder="Nombre" value={name} onChange={functionName} />
        </label>
        <br />
        <label>
          N° Mesa:
          {' '}
          <input placeholder="N° de Mesa" value={mesa} onChange={functionMesa} />
        </label>
      </div> */}
      <div>
        <div>
          {products.map(product => {
            if (product.descuento === "") {
              return (
                <div key={product.id}>
                  <img className="img-order" src={product.img} alt="imagen del producto" />
                  <div className="second">
                    <p>{product.categoria}</p>
                    <p>{product.producto}</p>
                    <p>Precio: S/.{product.precio}
                    </p>
                    <p>
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                        onClick={() => {
                          deleteRow(product);
                        }}
                      />
                    </p>
                  </div>
                  <input className="tres"
                    type="number"
                    min="1"
                    max="100"
                    defaultValue={product.cantidad}
                    onClick={e => {
                      const p = e.target.value;
                      cantidad(product.id, p);
                    }}
                  />
                  <p>S/.{product.precio * product.cantidad}</p>
                </div>
              )
            } else {
              return (
                <div key={product.id}>
                  <img className="img-order" src={product.img} alt="imagen del producto" />
                  <div className="second">
                    <p>{product.categoria}</p>
                    <p>{product.producto}</p>
                    <p>Precio: S/.{product.precio}</p>
                    <p>Descuento: S/.{product.descuento}</p>
                    <p>Precio final: S/.{product.precio_oferta}</p>
                    <p>
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                        onClick={() => {
                          deleteRow(product);
                        }}
                      />
                    </p>
                  </div>
                  <input className="tres"
                    type="number"
                    min="1"
                    max="100"
                    defaultValue={product.cantidad}
                    onClick={e => {
                      const p = e.target.value;
                      cantidad(product.id, p);
                    }}
                  />
                  <p>S/.{parseFloat(product.precio_oferta) * product.cantidad}</p>
                </div>
              )
            }

          })}
        </div>
      </div>
      <p className="Total">
        Total = S/.
        {total()}
      </p>
      {/* <Stripe></Stripe> */}
      <button
        type="button"
        className="Send"
        onClick={ () => {
          if (!disableSubmitButton) {
            addOrder(products, new Date(), 'pendiente', total())
              .then(() => {
                order([]);
              });
          }

        }}
        disabled={disableSubmitButton}
      >
        Carrito de compras
      </button>
    </div>
  );
};
