// import logo from "./logo.svg";

import Navbar from "./navbar";
import Home from "./Home";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Home />
      </div>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
      </header>
    </div>
  );
}

export default App;
