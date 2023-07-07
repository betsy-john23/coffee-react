/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./modules/login/pages/login";

const RoutesList: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export default RoutesList;
