import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/LogIn/Register/Register';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/Booking/:ServiceId'>
            <Booking></Booking>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
