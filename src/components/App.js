import Navbar from '../components/navbar';
import Home from './Home';
import Products from './Products';
import AboutUs from './AboutUs';
import Login from './Login';
import {BrowserRouter, Route} from 'react-router-dom';
import MyCart from './MyCart';





function App() {
  return (
    <div class="ui fluid container mc">
      <BrowserRouter>
     <Navbar/>
     <Route path="/products" component={Products}/>
     <Route path="/aboutus"  component={AboutUs}/>
     <Route path="/home"  component={Home}/>
     <Route path="/login"  component={Login}/>
     <Route path="/cart"  component={MyCart}/>
     <Route path="/" exact component={Login}/>
     </BrowserRouter>

    </div>
  );
}

export default App;
