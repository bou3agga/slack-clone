import React, { useState } from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);
  return (
    //bem naming convention

    <div className="app">
      <Router>
        {!user ? (/*<h1>login page</h1>*/<Login />) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>welcome</h1>
                </Route>
              </Switch>

            </div>
          </>
        )}

      </Router>
    </div >
  );
}

export default App;
