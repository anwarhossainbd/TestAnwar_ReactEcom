
import './App.css';
import Navbar from "./Components/Navbar";
import ProductContextProvider from "./Global/ProductContext";
import Products from "./Components/Products";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";
import CartContextProvider from "./Global/CartContext";

function App() {
  return (
    <div >

        <ProductContextProvider>
            <CartContextProvider>
                <Router>
                    <Navbar />
                        <Switch>
                            <Route exact path="/" component={Products}/>
                            <Route exact path="/Cart" component={Cart}/>
                            <Route  component={NotFound}/>
                        </Switch>
                </Router>
            </CartContextProvider>
        </ProductContextProvider>
    </div>
  );
}

export default App;
