import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import SelectedProduct from "./pages/SelectedProduct";
import { PrivateRoute, PublicRoute } from "./utils/UserRoutes";

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/product/:category/:type' element={<Product />} />
        <Route path='/:name' element={<SelectedProduct />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  );
}
