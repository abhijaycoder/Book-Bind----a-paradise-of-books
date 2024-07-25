import './App.css';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import Login from './components/Login';
import Checkout from './components/Checkout';
function App() {
  return (
   <div id="app">
    <Router>
      <Switch>

      <Route path='/checkout'>
          <Checkout/>
        </Route>

      <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/'>
        <Header/>
          <Home/>
        </Route>
      </Switch>
    </Router>
   </div>

  );
}

export default App;
