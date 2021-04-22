import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Products from './components/Products';
import Load from './components/Load';
import Details from './components/Details';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container-fluid mt-5'>
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/load">
            <Load />
          </Route>
          <Route exact path="/products/:id">
            <Details />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
