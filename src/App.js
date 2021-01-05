import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './LogIn';
import Createaccound from './CreateNewAccound';
import Landingpage from "./landingPage";
import History from './history';
import PrivateRouter from './PrivateRouter';
import Course from "./Course";
import { AuthContext } from "./Auth";

function App(props) {
  const existingTokens = localStorage.getItem("tokens");
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <div>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router history={History} >
          <Switch>
            <Route path="/" exact component={Landingpage} />
            <Route path="/Login" component={Login} />
            <Route path="/Createaccound" component={Createaccound} />
            <PrivateRouter path="/Course" component={Course} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
