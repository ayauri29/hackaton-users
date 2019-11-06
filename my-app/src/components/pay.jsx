import React, { Component } from "react";
import ReactDOM from "react-dom";

export class Pay extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
        script.dataset.preference.id = "$$id$$";
        this.form.appendChild(script);
    }
    render() {
        return (
            <form action="/procesar-pago" method="POST" ref={el => (this.form = el)}>

                {/* Script is inserted here */}
            </form>
        );
    }
}

/* return (
    <div>
        <form action="/procesar-pago" method="POST">
            <h1>Soy un formulario</h1>
            <script
                src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
                data-preference-id="$$id$$">
            </script>
        </form>
    </div>
); */


