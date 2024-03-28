// import logo from './logo.svg';
// import './App.css';

import NavBar from "./routingdemo/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2 align="center">Online Job Portal</h2>
      <Router>
      <NavBar/>
      </Router>
    </div>
  );
}

export default App;
