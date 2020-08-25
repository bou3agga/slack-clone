import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    //bem naming convention

    <div className="app">
      <Router>
        <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>wassup</h1>
            </Route>
          </Switch>
          {/*react-router->chat screen*/}
        </div>
      </Router>
    </div>
  );
}

export default App;
