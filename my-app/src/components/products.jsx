import React, { useState, useEffect } from 'react';
import firebase from '../firebase';


export const Products = ({ addProductAtOrder }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('products')
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
  }, []);
  return (
    <div className="div-products">
      {products.map((product) => {
        if (product.descuento !== '') {
          return (
            <div key={product.id}>
              <img className="img-product" src={product.img} alt="imagen del producto" />
              <p>{product.producto}</p>
              <p>{product.categoria}</p>
              <p className="precio">S/.{product.precio}</p>
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

