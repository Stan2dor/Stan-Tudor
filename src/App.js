// import logo from "./logo.svg";

import Navbar from "./navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Switch>
          <Route path="/"> 
            <Home />
          </Route>
        </Switch>
      </div>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
      </header>
    </div>
    </Router>
  );
}

export default App;
