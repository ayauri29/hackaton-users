/* eslint-disable no-unused-vars */
import React from 'react';
import firebase from 'firebase/app';
import { Stripe } from '../components/stripe'
import 'firebase/firestore';
import {Pay} from './pay';

export const AddOrder = ({
  products, cantidad, total, deleteRow, order,
}) => {
  /* const [name, setName] = useState('');
  const [mesa, setMesa] = useState(''); */

  /* const functionName = (e) => {
    setName(e.target.value);
  };
  const functionMesa = (e) => {
    setMesa(e.target.value);
  }; */
  const addOrder = (product, date, estado, total) => firebase
    .firestore()
    .collection('order')
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
      <h2>PEDIDO</h2>
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
      <table className="">
        <thead>
          <tr>
            <th colSpan="5">DETALLE DE PEDIDO</th>
          </tr>
          <tr>
            <td>CANT.</td>
            <td>DESCRIPCIÓN</td>
            <td>IMAGEN</td>
            <td>PU</td>
            <td>SUBTOTAL</td>
            <td>BORRAR</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <input
                  type="number"
                  min="1"
                  max="100"
                  defaultValue={product.cantidad}
                  onClick={(e) => {
                    const p = e.target.value;
                    cantidad(product.id, p);
                  }}
                />
              </td>
              <td><img className="img-order" src={product.img} alt="imagen del producto"/></td>
              <td>{product.nombre}</td>
              <td>
                S/.
                {product.precio}
              </td>
              <td>
                S/.
                {product.precio * product.cantidad}
              </td>
              <td>
                <i
                  className="fa fa-minus-circle"
                  aria-hidden="true"
                  onClick={() => {
                    deleteRow(product);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>

      </table>
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
