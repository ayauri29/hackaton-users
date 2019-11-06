// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
  access_token: 'TEST-3207889794547310-110521-685d02891d3f55e1fe82538ed155b913-451775514'
});

// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "$$init_point$$" en tu HTML
  global.init_point = response.body.init_point;
}).catch(function(error){
  console.log(error);
});