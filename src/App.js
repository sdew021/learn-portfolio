import "./App.css";
import React from "react";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home";
import Rajeev from "./components/Rajeev";
import Akash from "./components/Akash";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/akash" element={<Akash />} />
          <Route path="/rajeev" element={<Rajeev />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
