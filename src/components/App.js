import Navbar from '../components/navbar';
import {Route,Link} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import AboutUs from './AboutUs';
import Login from './Login';

function App() {
  return (
    <div class="ui container mc">
     <Navbar/>
     <Route path="/products" component={Products}/>
     <Route path="/aboutus"  component={AboutUs}/>
     <Route path="/home"  component={Home}/>
     <Route path="/login"  component={Login}/>
     <Route path="/" exact component={Login}/>
    </div>
  );
}

export default App;
