import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import { FaPhone } from 'react-icons/fa';

export const Belcenter = () => {
  const [centers, setCenter] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('belcenter')
      .get()
      .then((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
          array.push({ id: doc.id, ...doc.data() });
        });
        setCenter(array);
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }, []);
  return (
    <div className="div-products">
      {centers.map((center) => {

        return (
          <div key={center.id} className="product-div">
            <p className="bold">{center.name}</p>
            <p>{center.address}</p>
            <p><FaPhone size={18} color="Black" />  {center.phone1}</p>
            <p><FaPhone size={18} color="Black" />  {center.phone2}</p>
            <p>{center.horario}</p>
          </div>
        );

      })}
    </div>
  );
};

