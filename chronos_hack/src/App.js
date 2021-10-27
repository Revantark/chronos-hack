import './App.css';
import Home from './components/home';
import Login from './components/auth/login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddInfo from './components/common/stockgallery/stockgallery';
function App() {
  return (
    <div className="App">
        <Router>       
          <Switch>
            <Route path="/about" component={AddInfo}/>
            <Route path="/login" component={Login}/>
            {/* <Route path="/" component={}/> */}
            <Route path="/" component={Home}/>

          </Switch>
        </Router>    
    </div>
  );
}

export default App;
