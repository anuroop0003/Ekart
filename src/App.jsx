import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import { PrivateRoute, PublicRoute } from "./utils/userRoutes";

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  );
}
