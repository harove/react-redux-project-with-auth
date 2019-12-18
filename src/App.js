import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import LoginForm from "./components/login-form/LoginForm";
import Home from "./containers/home/Home";
import PrivateHome from "./containers/private-home/PrivateHome";
import Login from "./containers/login/Login";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import NotFound from "./containers/not-found/NotFound";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/private/home" component={PrivateHome} />
            <Route component = {NotFound}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
