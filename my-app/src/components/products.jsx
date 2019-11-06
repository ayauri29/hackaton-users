import React, { useState, useEffect } from 'react';
import firebase from '../firebase';


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
      <button type="button" onClick={() => setType('MAQUILLAJE')}>Maquillaje</button>
      <button type="button" onClick={() => setType('FRAGANCIAS')}>Fragancias</button>
      <button type="button" onClick={() => setType('ACCESORIOS COSMETICOS')}>Accesorios cosméticos</button>
      <button type="button" onClick={() => setType('CUIDADO PERSONAL')}>Cuidado personal</button>
      <button type="button" onClick={() => setType('TRATAMIENTO CORPORAL')}>Cuerpo</button>

      {products.map((product) => {
        if (product.descuento !== '') {
          return (
            <div key={product.id}>
              <img className="img-product" src={product.img} alt="imagen del producto" />
              <p>{product.producto}</p>
              <p>{product.categoria}</p>
              <p className="precio">S/.{product.precio}</p>
              <input type="number" min="0"></input>
              <p className="descuento">Descuento: {product.descuento}</p>
              <p>S/.{product.precio_oferta}</p>
              <button type="button" className="btn-add" onClick={() => addProductAtOrder(product)}>Agregar</button>
            </div>
          );
        } else {
          return (
            <div key={product.id}>
              <img className="img-product" src={product.img} alt="imagen del producto" />
              <p>{product.producto}</p>
              <p>{product.categoria}</p>
              <p>S/.{product.precio}</p>
              <button type="button" className="btn-add" onClick={() => addProductAtOrder(product)}>Agregar</button>
            </div>
          )
        }

      })}
    </div>
  );
};

