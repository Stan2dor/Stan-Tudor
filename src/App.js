import React from "react";
import logo from "./logo.svg";

import Navbar from "./navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useForm } from "react-hook-form";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
// import Users from "./Users";
import NotFound from "./NotFound";

function App() {
  const [data, setData] = React.useState(null);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path='/users/:id'>{/* <Users /> */}</Route>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("firstName")} placeholder='First name' />
              <input {...register("lastName")} placeholder='Last name' />
              <select {...register("category")}>
                <option value=''>Select...</option>
                <option value='A'>Category A</option>
                <option value='B'>Category B</option>
              </select>

              <input type='submit' />
            </form>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
        <header className='App-header'></header>
        <p>{!data ? "Loading data..." : data}</p>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
    </Router>
  );
}

export default App;
