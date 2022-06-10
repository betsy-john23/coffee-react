/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './modules/login/login';


const RoutesList: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/webinars" element={<Webinars />} /> */}
      </Routes>
    </>
  );
};

export default RoutesList;

