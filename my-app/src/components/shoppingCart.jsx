/* eslint-disable no-unused-vars */
import React, { Link } from "react";
import firebase from "firebase/app";
import { Stripe } from "../components/stripe";
import "firebase/firestore";
// import {Pay} from './pay';
import "../App.css";
import Car from '../icons/car.png'


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
    <div className="flex">
      <h2>Carro de compras</h2>
      <div >
        <div >
          {products.map(product => {
            if (product.descuento === "") {
              return (
                <div key={product.id} className="pedidos">
                  <img className="img-order" src={product.img} alt="imagen del producto" />
                  <div className="second">
                    <p className="fontp">{product.categoria}</p>
                    <p>{product.producto}</p>
                    <p className="fontp">Precio: S/.{product.precio}
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
                </div>
              )
            } else {
              return (
                <div key={product.id} className="pedidos">
                  <img className="img-order" src={product.img} alt="imagen del producto" />
                  <div className="second">
                    <p className="fontp">{product.categoria}</p>
                    <p>{product.producto}</p>
                    <p className="fontp">Precio: S/.{product.precio}</p>
                    <p className="fontDesc">Descuento: S/.{product.descuento}</p>
                    <p className="fontp2">Precio final: S/.{product.precio_oferta}</p>
                    {/* <p>S/.{parseFloat(product.precio_oferta) * product.cantidad}</p> */}
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
      </button>
      <button>
        <div>
          <h2>Comprar online</h2>
          <p>Los productos te llegan a la dirección que elijas</p>
        </div>
      </button>
      <button>
        <div>
          <img src={Car} alt="Icono car shop"></img>
          <div>
            <h2>Tiendas BELCORP</h2>
            <p>Elije los productos, retira y paga en cualquier tienda.</p>
          </div>
        </div>
      </button>
      <button>
        <div>
          <h2>Consultora</h2>
          <p>Elije los productos y una consultoras te lo entregará.</p>
        </div>
      </button>
    </div>
  );
};
