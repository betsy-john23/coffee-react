import React from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import RoutesList from "./routes";
import Header from "./layout/header/header";
axios.defaults.withCredentials = true;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <RoutesList />
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
