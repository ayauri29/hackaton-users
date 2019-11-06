import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Perfume from '../icons/perfume.svg';
import Accesorio from '../icons/accesorios.svg'
import Body from '../icons/body.svg'
import Maquillaje from '../icons/maquillaje.svg'
import Cuidado from '../icons/cuidado personal.svg'

export const Products = ({ addProductAtOrder }) => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState('MAQUILLAJE');

  useEffect(() => {
    firebase
      .firestore()
      .collection('products')
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
        console.log('Error getting documents: ', error);
      });
  }, [type]);
  return (
    <div className="div-products">
      <div className="group-button">
        <button type="button" className="button-filter" onClick={() => setType('MAQUILLAJE')}><img className="icon-filter" src={Perfume} alt="icono de perfume" /></button>
        <button type="button" className="button-filter" onClick={() => setType('FRAGANCIAS')}><img className="icon-filter" src={Accesorio} alt="icono de accesorio" /></button>
        <button type="button" className="button-filter" onClick={() => setType('ACCESORIOS COSMETICOS')}><img className="icon-filter" src={Maquillaje} alt="icono de maquillaje" /></button>
        <button type="button" className="button-filter" onClick={() => setType('CUIDADO PERSONAL')}><img className="icon-filter" src={Body} alt="icono de cuidado del cuerpo" /></button>
        <button type="button" className="button-filter" onClick={() => setType('TRATAMIENTO CORPORAL')}><img className="icon-filter" src={Cuidado} alt="icono de cuidado del cuerpo" /></button>
      </div>
      {products.map((product) => {
        if (product.descuento !== '') {
          return (
            <div key={product.id} className="product-div">
              <img className="img-product" src={product.img} alt="imagen del producto" />
              <p className="p-name">{product.producto}</p>
              <p>{product.categoria}</p>
              <p className="precio">S/.{product.precio}</p>
              <p className="descuento">Dsct: {product.descuento}</p>
              <p className="precio-final">S/.{product.precio_oferta}</p>
              <button type="button" className="btn-add" onClick={() => addProductAtOrder(product)}>AGREGAR</button>
            </div>
          );
        } else {
          return (
            <div key={product.id} className="product-div">
              <img className="img-product" src={product.img} alt="imagen del producto" />
              <p className="p-name">{product.producto}</p>
              <p>{product.categoria}</p>
              <p>S/.{product.precio}</p>
              <button type="button" className="btn-add" onClick={() => addProductAtOrder(product)}>AGREGAR</button>
            </div>
          )
        }
      })}
    </div>
  );
};

