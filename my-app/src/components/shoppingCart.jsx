/* eslint-disable no-unused-vars */
import React from "react";
import firebase from "firebase/app";
import { Stripe } from "../components/stripe";
import "firebase/firestore";
// import {Pay} from './pay';
import "../App.css";

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

  // const validateOrder = () => {
  //   return products.length > 0;
  // };

  // const disableSubmitButton = !validateOrder();

  return (
    <div className="flex">
      <h2>Carro de compras</h2>
      <div >
        <div>
          {products.map(product => (
            <div className="pedido" key={product.id} >             
              <img className="img-order" src={product.img} alt="imagen del producto" />
              <div className="second">
              <p>{product.categoria}</p>
              <p>{product.producto}</p>
              <p>Precio: S/.{product.precio}
              </p>
              <p>
                <i
                  className="fa fa-minus-circle"
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
            </div>
          ))}
        </div>
      </div>
      <p className="Total">
        Total = S/.
        {total()}
      </p>
      <Stripe></Stripe>
      {/* <button
        type="button"
        className="Send"
        onClick={() => {
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
      </button> */}
    </div>
  );
};
