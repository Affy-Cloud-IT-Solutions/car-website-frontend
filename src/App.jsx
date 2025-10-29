// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routeconfig";

const App = () => {
  return (
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  );
};

export default App;
