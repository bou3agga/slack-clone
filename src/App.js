import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
function App() {
  return (
    //bem naming convention
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        {/*react-router->chat screen*/}
      </div>

    </div>
  );
}

export default App;
