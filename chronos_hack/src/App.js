import './App.css';
import Home from './components/home';
import Login from './components/auth/login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddInfo from './components/common/stockgallery/stockgallery';
import FarmerHome from './components/farmer/home';
import VendorHome from './components/vendor/home';
import PostDetails from './components/postDetails';
import Advice from './components/advice';
import Shop from './components/vendor/shop';
import ShopDetails from './components/shopdetails';
function App() {
  return (
    <div className="App">
        <Router>       
          <Switch>
            <Route path="/about" component={AddInfo}/>
            <Route path="/loginVendor">
              <Login farmer={false}/>
            </Route>
            <Route path="/loginFarmer">
            <Login />

            </Route>
            <Route path="/farmer" component={FarmerHome}/>
            <Route path="/vendor" component={VendorHome}/>
            <Route path="/details" component={PostDetails}/>
            <Route exact path="/shop" component={Shop}/>
            <Route path="/advice" component={Advice}/>
            <Route path="/shopDetails" component={ShopDetails}/>

            {/* <Route path="/" component={}/> */}
            <Route path="/" component={Home}/>

          </Switch>
        </Router>    
    </div>
  );
}

export default App;
