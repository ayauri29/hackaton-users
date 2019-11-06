import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/home';
import { Products } from './components/products';
// import { Header } from './components/header';
import { AddOrder } from './components/shoppingCart';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars } from 'react-icons/fa';
import { IoMdClose, IoMdSearch, IoIosHeartEmpty } from "react-icons/io";
import Logo from './logo.png';
import Places from './components/places';


function App() {
  const [selectProduct, setOrder] = useState([]);

  const incrementar = (prodId, cant) => {
    const arrNew = selectProduct.map((element) => {
      if (prodId === element.id) {
        return {
          ...element,
          cantidad: cant,
        };
      }
      return element;
    });
    setOrder(arrNew);
  };

  const Total = () => {
    let acum = 0;
    selectProduct.map((p) => acum += p.precio * p.cantidad);
    return acum;
  };

  return (
    <Router>
      <div>
        <header>
          <div className="center">
          <ResponsiveMenu
            menuOpenButton={<FaBars size={30} color="Black" />}
            menuCloseButton={<IoMdClose size={30} color="Black" />}
            changeMenuOn="500px"
            largeMenuClassName="large-menu-classname"
            smallMenuClassName="small-menu-classname"
            menu={
              <ul>
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/products'} className="nav-link">Productos</Link></li>
                <li><Link to={'/shopping'} className="nav-link">Carrito</Link></li>
                <li><Link to={'/places'} className="nav-link">Places</Link></li>
              </ul>
            }
          />
          </div>
          <img className="logo" src={Logo} alt="My logo" />
          <div className="center">
            <IoMdSearch size={30} color="Black" />
            <IoIosHeartEmpty size={30} color="Black" />
          </div>

        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={() => <Products addProductAtOrder={(product) => {
            console.log(product);
            const found = selectProduct.find((p) => {
              return p.id === product.id;
            });

            if (found !== undefined) {
              const newArr = selectProduct.map((p) => {
                if (found.id === p.id) {
                  p.disable = true;
                }
                return p;
              });
              setOrder(newArr);
            } else {
              setOrder([...selectProduct, { ...product, cantidad: 1 }]);
            }
          }} />} />
          <Route path='/shopping' component={() => <AddOrder
            order={setOrder}
            products={selectProduct}
            cantidad={incrementar}
            total={Total}
            deleteRow={(element) => {
              const newArray = selectProduct.filter((ele) => {
                return element.id !== ele.id;
              });
              setOrder(newArray);
            }} />} />
            <Route exact path='/places' component={Places} />
        </Switch>
      </div>

    </Router>
  )
}

export default App;
